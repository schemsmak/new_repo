import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../homepage';
import { FILMS } from '../mock-film-list';
@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  filmList: Film[];
  film: Film|undefined;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.filmList = FILMS;
    const filmId: string|null= this.router.snapshot.paramMap.get('id');
    if(filmId){
      this.film = this.filmList.find(film => film.id === +filmId);
    }
    
  }

}
