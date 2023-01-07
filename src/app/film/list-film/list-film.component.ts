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
export class ListFilmComponent implements OnInit {
  filmList: Film[] = [];
  setTitle: Array<string> = ['avenger', 'batman', 'spiderman', 'superman', 'ironman', 'hulk', 'thor', 'captain america', 'wolverine', 'deadpool', 'black panther']

  constructor(private router: Router,
    private filmService: FilmService) { }

  ngOnInit() {
    this.setTitle.forEach((title) => {
      this.filmService.getFilmList(title)
        .subscribe(filmList => this.filmList = [...this.filmList, ...(filmList)??[]]);
    });
  }

  goToFilm(film: Film) {
    this.router.navigate(['/films', film.imdbID]);
  }

}

