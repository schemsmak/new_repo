import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject,switchMap } from 'rxjs';
import { FilmService } from '../film.service';
import { Film } from '../homepage';
@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {
searchTerms = new Subject<string>();
films$: Observable<Film[]>;
  
  constructor(
    private router: Router,
    private filmService: FilmService
    ) { }

  ngOnInit(): void {
    this.films$ = this.searchTerms.pipe(

      debounceTime(300),

      distinctUntilChanged(),
      
      switchMap((term) => this.filmService.searchFilmList(term))
      );
  }
  search(term: string){
    this.searchTerms.next(term);
    }
  goToDetail(film: Film) {
    const link=['/film', film.id];
    this.router.navigate(link);
  }
}
