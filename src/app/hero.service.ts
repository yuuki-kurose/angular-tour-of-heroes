import { Injectable }               from '@angular/core';
import { Hero }                     from './hero';
import { HEROES }                   from './mock-heroes';
import { Observable, of }           from 'rxjs';
import { MessageService }           from './message.service';
import { HttpClient, HttpHeaders }  from '@angular/cummon/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(hero);
  }
  
  // of関数を使用し、サーバーからのデータの取得→addコマンドにより送信
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)    
  }

  
  
}
