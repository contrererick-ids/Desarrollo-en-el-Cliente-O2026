import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { IMovie } from '../../shared/models/interfaces/imovie';
import { MovieService } from '../../shared/services/movieService';
import { FavoritesService } from '../../shared/services/favoritesService';

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetail {

  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  protected favoritesService = inject(FavoritesService);

  movie = toSignal(
    this.route.paramMap.pipe(
      map(params => this.movieService.getMovieById(Number(params.get('id'))))
    )
  );

  toggleFavorite(movie: IMovie) {
    if (this.favoritesService.isFavorite(movie.id)) {
      this.favoritesService.remove(movie.id);
    } else {
      this.favoritesService.add(movie);
    }
  }
  
}
