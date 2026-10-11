import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../../interfaces/imovie';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-movies',
  imports: [FormsModule, MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {

  @Input() moviesList: IMovie[] | undefined = undefined;

  filteredMovies: IMovie[] | undefined = undefined;
  search: string = '';

  ngOnChanges() {
    this.filteredMovies = this.moviesList;
  }

  searchMovies() {
    if (!this.moviesList) return;

    const term = this.search.trim().toLowerCase();
    if (!term) {
      this.filteredMovies = this.moviesList;
      return;
    }

    this.filteredMovies = this.moviesList.filter(movie =>
      movie.title?.toLowerCase().includes(term) ||
      movie.director?.toLowerCase().includes(term) ||
      movie.producer?.toLowerCase().includes(term) ||
      movie.genre?.toLowerCase().includes(term) ||
      String(movie.year).includes(term)
    );
  }

}