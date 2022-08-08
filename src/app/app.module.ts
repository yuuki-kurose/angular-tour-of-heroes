import { AppComponent }                   from './app.component';
import { HeroesComponent }                from './heroes/heroes.component';
import { HeroDetailComponent }            from './hero-detail/hero-detail.component';
import { MessageComponent }               from './message/message.component';
import { DashboardComponent }             from './dashboard/dashboard.component';
import { HeroSearchComponent }            from './hero-search/hero-search.component';

import { AppRoutingModule }               from './app-routing.module';
import { NgModule }                       from '@angular/core';
import { BrowserModule }                  from '@angular/platform-browser';
import { FormsModule }                    from '@angular/forms';
import { HttpClientModule }               from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';
import { NgxsModule }                     from '@ngxs/store';
import { NgxsEmitPluginModule }           from '@ngxs-labs/emitter';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
