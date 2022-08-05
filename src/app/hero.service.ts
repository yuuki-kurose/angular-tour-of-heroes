import { Injectable }               from '@angular/core';
import { Hero }                     from './hero';
import { HEROES }                   from './mock-heroes';
import { Observable, of }           from 'rxjs';
import { MessageService }           from './message.service';
import { HttpClient, HttpHeaders }  from '@angular/cummon/http';
import { catchError, map, tap }     from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    const url = '${ this.heroesUrl }/${ id }';
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log('fetched hero id=${ id }')),
      catchError(this.handleError<Hero>('getHero id=${ id }'))
    );
  }
  
  // of関数を使用し、サーバーからのデータの取得→addコマンドにより送信
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );   
  } 

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(_ => this.log('updated hero id=${ hero.id }')),
      catchError(this.handleError<any>('updateHero'))
    );

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
}
