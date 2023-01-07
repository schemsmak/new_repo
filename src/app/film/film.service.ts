
/*private url : string='https://www.omdbapi.com/';
private apiKey : string = 'ac68cfd'

  getFilmList(title:string) {
   this.http.get(`${this.url}?apikey=${this.apiKey}&s=${title}`);
  }

  getFilmId(id: string) {
    this.http.get(`${this.url}?apikey=${this.apiKey}&i=${id}`);
  }*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,tap,of, map } from 'rxjs';
import { Film } from './homepage';

@Injectable()
export class FilmService {

  constructor( private http: HttpClient) {}
  private url : string='https://www.omdbapi.com/';
  private apiKey : string = 'ac68cfd'
  

  
 getFilmList(Title:string) : Observable<Film[] >{
    return this.http.get(`${this.url}?apikey=${this.apiKey}&s=${Title}`).pipe(
      map((response: any) => {
        let data = response["Search"]
        return data.map((film: any) => {
          return {
            Title: film.Title,
            Year: film.Year,
            imdbID: film.imdbID,
            Type: film.Type,
            Poster: film.Poster
          }
        })
      }), //tap equivalent d'un console.log pour un observable 
    catchError((error) =>this.handleError(error, [])) // interception d'error et importer un tableau vide 
     
    );
  }
  
  getFilmById(imdbID: string) : Observable<Film|undefined> {
    return this.http.get(`${this.url}?apikey=${this.apiKey}&i=${imdbID}`).pipe(
      tap((response) => console.log(response)), 
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

