import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroプロパティを追加する
  hero: Hero = { id: 1, name: '黒瀬有紀' };

  // heroesコンポーネントプロパティを定義し、HEROES配列を表示
  heroes = HEROES;

  // クリックイベントにより、メソッドを設定する
  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  
  // constructor() { }

  ngOnInit(): void {}

}



