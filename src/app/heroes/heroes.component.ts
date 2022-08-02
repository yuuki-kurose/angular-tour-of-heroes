import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroプロパティを追加する
  hero: Hero = {
    id:     1,
    name:  '黒瀬有紀'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}



