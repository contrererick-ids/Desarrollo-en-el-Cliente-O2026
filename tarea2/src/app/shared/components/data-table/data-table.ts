import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})

export class DataTable {
  @Input() users: Users[] | null = null;
  @Input() user_name = '';
  @Output() doOnClick: EventEmitter<number> = new EventEmitter();

  selectedUser: Users | null = null;

  showUserInfoButton(usuario: Users) {
    this.selectedUser = usuario;
    this.doOnClick.emit(usuario.id);

  }

  clearSelection() {
    this.selectedUser = null;
  
  }

}
