import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { FilmGenrePipe } from './film-genre.pipe';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    FilmGenrePipe,
    ListFilmComponent,
    DetailFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
