import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../homepage';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  @Input() games: Film[] = [];

  constructor(private router: Router,) { }

  ngOnInit() {
    
  }

  goToFilm(film: Film) {
    this.router.navigate(['/game', film.imdbID]);
  }

}
