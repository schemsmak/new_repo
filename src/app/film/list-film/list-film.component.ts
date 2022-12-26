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
  
  constructor(private router: Router,
    private filmService: FilmService) 
    { }

  ngOnInit() {
this.filmList = this.filmService.getFilmList();
  }
   
  goToFilm(film: Film) {
    this.router.navigate(['/films', film.id]);
  }
 
}
