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
  setTitle: Array<string> = ['avenger', 'batman', 'spiderman', 'superman', 'ironman', 'hulk', 'thor', 'captain america', 'wolverine', 'deadpool', 'black panther',
'the','star','prison','game','of','thrones','breaking','bad','the walking dead','the big bang theory','the flash','arrow','the 100','the vampire diaries','the originals','the blacklist','the good doctor','the handmaid\'s tale','the good place','the last kingdom','the good fight','the gifted','the expanse','the magicians',
'big','black','red','yellow','and','white','space','moon','light','even','marvel','dc','comics','disney','cold','a','']

  games: Film[] = []
  series: Film[] = []
  movie: Film[] = []

  constructor(private router: Router,
    private filmService: FilmService) { }

  ngOnInit() {
    this.setTitle.forEach((title) => {
      this.filmService.getFilmList(title)
        .subscribe(filmList => {
          this.filmList = [...this.filmList, ...(filmList)]
          this.games = [...this.games,...filmList.filter((el) => el.Type == 'game')]
          this.series = [...this.series,...filmList.filter((el) => el.Type == 'series')]
          this.movie = [...this.movie,...filmList.filter((el) => el.Type == 'movie')]
          console.log(this.series)
        });
    });
  }

  goToFilm(film: Film) {
    this.router.navigate(['/films', film.imdbID]);
  }

}

