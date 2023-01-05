import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,tap,of } from 'rxjs';
import { Film } from './homepage';



@Injectable()
export class FilmService {

  constructor( private http: HttpClient) {}

  getFilmList() : Observable<Film[] >{
    return this.http.get<Film[]>('api/films').pipe(
      tap((response) => this.log(response)), //tap equivalent d'un console.log pour un observable 
    catchError((error) =>this.handleError(error, [])) // interception d'error et importer un tableau vide 
     
    );
  }
  
  getFilmById(filmId: number) : Observable<Film|undefined> {
    return this.http.get<Film>( `api/films/${filmId}` ).pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchfilmList( term: string ): Observable<Film[]>{
    return this.http.get<Film[]>(`api/films/?title=${term}`).pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error, undefined))
    );
    
  }

private log(reponse: Film[]|Film|undefined) {
  console.table(reponse);
}

private handleError(error: Error, errorValue: any){
  console.error(error);
  return of(errorValue);
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
