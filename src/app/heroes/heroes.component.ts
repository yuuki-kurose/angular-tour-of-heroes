import { Component, OnInit } from '@angular/core';
import { Hero }              from '../hero';
import { HeroService }       from '../hero.service';
@Component({
  selector: 　　'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: 　['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroプロパティを追加する
  hero: Hero = { id: 1, name: '黒瀬有紀' };

  // heroesコンポーネントプロパティを定義し、HEROES配列を表示
  heroes: Hero[] = [];

  // クリックイベントにより、メソッドを設定する
  // selectedHeroは省略可能プロパティである
  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  // HeroesComponentが生成される際、privateなheroServiceプロパティを定義
  constructor(private heroService: HeroService) { }

  // サービスを介してヒーローデータを取得するためのメソッド
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}



