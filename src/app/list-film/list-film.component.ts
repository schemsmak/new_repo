import { Component } from '@angular/core';
import { Film } from '../homepage';
import { FILMS } from '../mock-film-list';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent  {
  filmList: Film[] = FILMS;
 
}
