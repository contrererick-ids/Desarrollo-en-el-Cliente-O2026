import { Component, inject } from '@angular/core';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { FavoritesService } from '../../shared/services/favoritesService';

@Component({
  selector: 'app-favorites',
  imports: [MovieCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})

export class Favorites {

  protected favoritesService = inject(FavoritesService);

}
