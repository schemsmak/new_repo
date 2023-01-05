import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,tap,of, map } from 'rxjs';
import { Film } from './homepage';



@Injectable()
export class FilmService {
   

  constructor( private http: HttpClient) {}


  getFilmList(title:string) : Observable<Film[] >{
    return this.http.get('https://www.omdbapi.com/?apikey=42af3ea1&i=tt3896198'/*'http://www.omdbapi.com/?s='+title+'&apikey=ac68cfd'*/).pipe(
    map((response: any) =>  this.responseToFilm(response)
    ) // interception d'error et importer un tableau vide 
     
    );
  }
  responseToFilm(response: any){
    return response.Search.map((film: any) => {
      return {
        id: film.imdbID,
        title: film.Title,
        description: film.Year,
        imageUrl: film.Poster,
        created: film.Year,
        genres: film.Type,
      }
    })
  }
  getFilmById(filmId: number) : Observable<Film|undefined> {
    return this.http.get<Film>( `api/films/${filmId}` ).pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchFilmList( term: string ): Observable<Film[]>{
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
