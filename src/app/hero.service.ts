import { Injectable }     from '@angular/core';
import { Hero }           from './hero';
import { HEROES }         from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  // of関数を使用し、サーバーからのデータの取得→addコマンドにより送信
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  
  
}
