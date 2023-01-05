import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,tap,of } from 'rxjs';
import { Film } from './homepage';
import { FILMS } from './mock-film-list';



@Injectable()
export class FilmService {

  constructor( private http: HttpClient) {}

  getFilmList() : Observable<Film[] >{
    return this.http.get<Film[]>('api/films').pipe(
    tap((filmList) => console.table(filmList)), //tap equivalent d'un console.log pour un observable 
    catchError((error) => { // interception d'error et importer un tableau vide 
      console.log(error);
      return of([]);
    })
    );
  }
  
  getFilmById(filmId: number) : Observable<Film|undefined> {
    return this.http.get<Film>( `api/films/${filmId}` ).pipe(
      tap((film) => console.log(film)), 
      catchError((error) => { 
        console.log(error);
        return of(undefined);
      })
    )
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
