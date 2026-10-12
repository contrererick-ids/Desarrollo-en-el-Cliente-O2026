import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../../../interfaces/imovie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {

  @Input() movie: IMovie | undefined = undefined;
  @Input() showRemoveButton: boolean = false;
  @Output() remove = new EventEmitter<IMovie>();

  private readonly router = inject(Router);

  goToDetail() {
    void this.router.navigate(['/movies', this.movie?.id]);
  }

  onRemove() {
    if (this.movie) {
      this.remove.emit(this.movie);
    }
  }

}
