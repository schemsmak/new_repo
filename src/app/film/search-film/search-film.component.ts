import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Film } from '../homepage';
@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {
searchTerms = new Subject<string>();
films$: Observable<Film[]>;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  search(term: string){
    this.searchTerms.next(term);
    }
  goToDetail(film: Film) {
    const link=['/film', film.id];
    this.router.navigate(link);
  }
}
