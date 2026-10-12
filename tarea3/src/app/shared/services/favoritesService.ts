import { Injectable, signal } from '@angular/core';
import { IMovie } from '../../interfaces/imovie';

@Injectable({ providedIn: 'root' })
export class FavoritesService {

  private readonly _favorites = signal<IMovie[]>([]);
  readonly favoritesList = this._favorites.asReadonly();

  isFavorite(id: number | undefined): boolean {
    return this._favorites().some(movie => movie.id === id);
  }

  add(movie: IMovie): void {
    if (!this.isFavorite(movie.id)) {
      this._favorites.update(list => [...list, movie]);
    }
  }

  remove(id: number | undefined): void {
    this._favorites.update(list => list.filter(movie => movie.id !== id));
  }
}
