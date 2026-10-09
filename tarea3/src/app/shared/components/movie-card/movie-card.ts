import { Component, Input } from '@angular/core';
import { IMovie } from '../../../interfaces/imovie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {

  @Input() movie: IMovie | undefined = undefined;

}
