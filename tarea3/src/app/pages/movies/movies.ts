import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../../shared/models/interfaces/imovie';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { MovieService } from '../../shared/services/movieService';

@Component({
  selector: 'app-movies',
  imports: [FormsModule, MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {

  private movieService = inject(MovieService);

  moviesList: IMovie[] = this.movieService.getMovies();
  filteredMovies: IMovie[] = this.moviesList;
  search: string = '';

  searchMovies() {
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