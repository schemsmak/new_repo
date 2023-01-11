import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../homepage';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  @Input() series:Film[]=[];


  constructor(private router: Router,
    private filmService: FilmService) { }

  ngOnInit() {

  }

  goToFilm(film: Film) {
    this.router.navigate(['/series', film.imdbID]);
  }

}

