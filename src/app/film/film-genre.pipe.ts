import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmGenre'
})
export class FilmGenrePipe implements PipeTransform {

  transform(genre: string): string {
  
    let color: string;
  
    switch (genre) {
      case 'Action':
        color = 'blue lighten-1';
        break;
      case 'Adventure':
        color = 'blue lighten-1';
        break;
      case 'Comedy':
        color = 'blue lighten-1';
        break;
      case 'Drama':
        color = 'blue lighten-1';
        break;
      case 'Romance':
        color = 'blue lighten-1';
        break;
      case 'Fantastic':
        color = 'blue lighten-1';
        break;
      case 'Historical':
        color = 'blue lighten-1';
        break;
      case 'Biography':
        color = 'blue lighten-1';
        break;
      case 'Horror':
        color = 'blue lighten-1';
        break;
      case 'Western':
        color = 'blue lighten-1';
        break;
      case 'Crime':
        color = 'blue lighten-1';
        break;
      case 'Sci-Fi':
        color = 'blue lighten-1';
        break;
      case 'Thriller':
        color = 'blue lighten-1';
        break;
      case 'War':
        color = 'blue lighten-1';
        break;
      case 'Mystery':
        color = 'blue lighten-1';
        break;
      case 'Animation':
        color = 'blue lighten-1';
        break;
      case 'Family':
        color = 'blue lighten-1';
        break;
      case 'Fantasy':
        color = 'blue lighten-1';
        break;
      case 'Musical':
        color = 'blue lighten-1';
        break; 
      case 'Sport':
        color = 'blue lighten-1';
        break;
      case 'Documentary':
        color = 'blue lighten-1';
        break;
      case'Manga':
        color = 'blue lighten-1';
        break;
      case'Anime':
        color = 'blue lighten-1';
        break;

      default:
        color = 'blue lighten-1';
        break;
    }
  
    return 'chip ' + color;
  
  }
}
  


