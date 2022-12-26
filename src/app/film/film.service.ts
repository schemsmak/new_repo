import { Injectable } from '@angular/core';
import { Film } from './homepage';
import { FILMS } from './mock-film-list';


@Injectable()
export class FilmService {

  getFilmList() : Film[]{
    return FILMS;
    
  }
  getFilmById(id: number) : Film|undefined{
    return FILMS.find(film => film.id == id);
  }
  getFilmGenreList() : string[]{
    return ['Comedy',
    'Drama',
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Crime',
    'Documentary',
    'Family',
    'Fantasy',
    'Film-Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Short',
    'Sport',
    'Thriller',
    'Western',
    'War',
    'Anime',]
  }
}
