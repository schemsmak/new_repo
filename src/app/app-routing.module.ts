import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ListFilmComponent } from './list-film/list-film.component';

const routes: Routes = [
{path: 'films', component: ListFilmComponent},
{path: 'film/:id', component: DetailFilmComponent},
{ path: '', redirectTo: 'film', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
