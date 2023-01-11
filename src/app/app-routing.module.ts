import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DetailFilmComponent } from './film/detail-film/detail-film.component';
import { EstelleComponent } from './estelle/estelle.component';
import { SchemsComponent } from './schems/schems.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/home' },
{ path: 'home', component: HomeComponent },
{ path: 'game/:id', component: DetailFilmComponent },
{path: 'films/:id', component: DetailFilmComponent},
{path: 'series/:id', component: DetailFilmComponent},
{ path: 'about', component: AboutComponent },
{path: 'estelle', component: EstelleComponent},
{path: 'schems', component: SchemsComponent},
{ path: '**', component: PageNotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
