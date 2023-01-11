import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../homepage';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() films: Film[]|undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.films)
  }

  goToFilm(film: Film) {
    this.router.navigate(['/films', film.imdbID]);
  }

}
