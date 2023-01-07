import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Film } from './film/homepage';
import { ListFilmComponent } from './film/list-film/list-film.component';
import { GenresComponent } from './genres/genres.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SeriesComponent } from './series/series.component';
import { AfficheComponent } from './affiche/affiche.component';

const routes: Routes = [
{ path: '', component: ListFilmComponent },
{ path: 'about', component: AboutComponent },
{ path: 'genres', component: GenresComponent },
{ path: 'movies', component: MoviesComponent },
{ path: 'series', component: SeriesComponent },
{ path: 'affiche', component: AfficheComponent },
{ path: '**', component: PageNotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
