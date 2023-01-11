import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../homepage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']


})
export class HomeComponent implements OnInit {
  setTitle: Array<string> = ['avenger', 'batman', 'spiderman', 'superman', 'ironman', 'hulk', 'thor', 'captain america', 'wolverine', 'deadpool', 'black panther',
  'the','star','prison','game','of','thrones','breaking','bad','the walking dead','the big bang theory','the flash','arrow','the 100','the vampire diaries','the originals','the blacklist','the good doctor','the handmaid\'s tale','the good place','the last kingdom','the good fight','the gifted','the expanse','the magicians',
  'big','black','red','yellow','and','white','space','moon','light','even','marvel','dc','comics','disney','cold','a','or','trek','shrek','dream','works','warner','bro','end'
  ,'new','old','house','garden','hills','under','between','over','under','above','below','around','through','across','along','off','out','in','on','at','to','from','gta','mario','nintendo','switch','call','dutty','game','zelda','good',
'pokemon',]
  
    games: Film[] = []
    series: Film[] = []
    films: Film[] = []
    movies: Film[] = []


  
    constructor(
      private filmService: FilmService) { }
  
    ngOnInit() {
      this.setTitle.forEach((title) => {
        this.filmService.getFilmList(title)
          .subscribe(filmList => {
            this.games = [...this.games,...filmList.filter((el) => el.Type == 'game')]
            this.series = [...this.series,...filmList.filter((el) => el.Type == 'series')]
            this.films = [...this.films,...filmList.filter((el) => el.Type == 'movie')]
           
            console.log(this.films)
          });
      });
    }
}
