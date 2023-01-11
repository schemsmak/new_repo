import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { EstelleComponent } from './estelle/estelle.component';
import { SchemsComponent } from './schems/schems.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { SeriesComponent } from './series/series.component';
import { DetailFilmComponent } from './film/detail-film/detail-film.component';
import { BorderCardDirective } from './border-card.directive';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    EstelleComponent,
    SchemsComponent,
    FilmComponent,
    GameComponent,
    SeriesComponent,
    DetailFilmComponent,
    BorderCardDirective,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { };