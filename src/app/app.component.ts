import { Component, OnInit, NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FILMS } from './mock-film-list';
import{ Film } from './homepage';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
selector: 'app-root',
templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  filmList: Film[] = FILMS;
  filmSelected: Film|undefined;
filmGenre: string;

ngOnInit() {
  console.table(this.filmList);
}

selectFilm(filmId: string){
  const film : Film|undefined = this.filmList.find(film => film.id === +filmId);
  if(film){  
  console.log(`Vous avez demandé le film ${film.title}`);
  this.filmSelected = film;
}
else{
  console.log(`Le film n'existe pas.`);
  this.filmSelected = film;
}
}
} 
