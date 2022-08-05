import { Component, OnInit } from '@angular/core';

import { Hero }              from '../hero';
import { HeroService }       from '../hero.service';
import { MessageService }    from '../message.service';


@Component({
  selector:    'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:  ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroesコンポーネントプロパティを定義し、HEROES配列を表示
  heroes: Hero[] = [];

  // HeroesComponentが生成される際、privateなheroServiceプロパティを定義
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // サービスを介してヒーローデータを取得するためのメソッド
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}



