import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilmModule } from './film/film.module';
import { AboutComponent } from './about/about.component';
import { GenresComponent } from './genres/genres.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    GenresComponent,
    MoviesComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    FilmModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
