import { ActivatedRoute }          from '@angular/router';
import { Location }                from '@angular/common';

import { HeroService }             from '../hero.service';

import { Component, OnInit,Input } from '@angular/core';
import { Hero }                    from '../hero';

@Component({
  selector:     'app-hero-detail',
  templateUrl:  './hero-detail.component.html',
  styleUrls:    ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route:       ActivatedRoute,
    private heroService: HeroService,
    private location:    Location
  ) { }

  // 親子間のデータのやり取り
  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
}
