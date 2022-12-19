import { Component, OnInit } from '@angular/core';
import { FILMS } from './mock-film-list';
import{ Film } from './homepage';
@Component({
  selector: 'app-root',
templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit {
  filmList: Film[] = FILMS;
ngOnInit() {
  console.table(this.filmList);
  this.selectFilm(this.filmList[0]);
}
selectFilm(film: Film){
  console.log(`Vous avez cliqué sur le film ${film.title}`);
}
}
