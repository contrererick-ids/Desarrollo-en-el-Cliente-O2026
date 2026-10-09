import { Component, Input } from '@angular/core';
import { IMovie } from '../../interfaces/imovie';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-movies',
  imports: [MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {

  @Input() moviesList: IMovie[] | undefined = undefined;

}

console.log('logSysPrint-movies.ts: Movies component initialized');
