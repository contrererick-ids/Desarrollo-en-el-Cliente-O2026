import { Component, Input } from '@angular/core';
import { IMovie } from '../../interfaces/imovie';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetail {

  @Input() movie: IMovie | undefined = undefined;

}
