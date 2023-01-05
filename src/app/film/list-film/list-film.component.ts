import { Component, OnInit } from '@angular/core';
import { Film } from '../homepage';

import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit  {
  filmList: Film[] ;
  titleList: string[] = ["avengers", "batman", "spiderman", "ironman", "hulk", "thor", "captain america", "black widow", "black"];
  constructor(private router: Router,
    private filmService: FilmService) 
    { }

  ngOnInit() {
this.titleList.forEach(
  (title) => {
    this.filmService.getFilmList(title)
    .subscribe(filmList => {
      this.filmList = [...this.filmList, ...filmList]
    });
  }
) 
  }
   
  goToFilm(film: Film) {
    this.router.navigate(['/films', film.id]);
  }
 
}
