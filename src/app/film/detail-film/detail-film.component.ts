import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../homepage';


@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  filmList: Film[];
  film: Film|undefined;

  constructor(private route: ActivatedRoute,
     private router: Router,
    private filmService: FilmService
    ) { }

  ngOnInit(): void {
  
    const filmId: string|null= this.route.snapshot.paramMap.get('id');
    
    if(filmId){
      this.filmService.getFilmById(filmId)
      .subscribe(film => this.film = film);
    }
    
  }
  
goToFilmList(){
  this.router.navigate(['/films']);


}
}
