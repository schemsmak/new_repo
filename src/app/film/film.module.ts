import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmComponent } from './list-film/list-film.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmGenrePipe } from './film-genre.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FilmService } from './film.service';


const routes: Routes = [
  {path: 'films', component: ListFilmComponent},
  {path: 'films/:id', component: DetailFilmComponent},
];

@NgModule({
  declarations: [
    ListFilmComponent,
    DetailFilmComponent,
    BorderCardDirective,
    FilmGenrePipe,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [FilmService]
})
export class FilmModule { }

