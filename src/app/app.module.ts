import { NgModule }                       from '@angular/core';
import { BrowserModule }                  from '@angular/platform-browser';

import { NgxsModule }                     from '@ngxs/store';
import { NgxsEmitPluginModule }           from '@ngxs-labs/emitter';
// import { NgxsLoggerPluginModule }         from '@ngxs/logger-plugin';
import { HeroState }                      from './hero.status';

import { FormsModule }                    from '@angular/forms';
import { HttpClientModule }               from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';

import { AppRoutingModule }               from './app-routing.module';

import { AppComponent }                   from './app.component';
import { DashboardComponent }             from './dashboard/dashboard.component';
import { HeroDetailComponent }            from './hero-detail/hero-detail.component';
import { HeroesComponent }                from './heroes/heroes.component';
import { HeroSearchComponent }            from './hero-search/hero-search.component';
import { MessagesComponent }              from './message/message.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgxsModule.forRoot(),
    NgxsEmitPluginModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
