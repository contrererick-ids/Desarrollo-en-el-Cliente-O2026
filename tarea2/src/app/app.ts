import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { DataTable } from './shared/components/data-table/data-table';
import { Users } from './shared/interfaces/users';

@Component({
  selector: 'app-root',
  imports: [Header, DataTable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  usersArray: Users[] = [
    {
      id: 1,
      name: 'David Lynch',
      email: 'davidlynch@cinema.com',
      phone: '3322556611',
      address: 'Lynch Street'
    },
    {
      id: 2,
      name: 'Steven Spielberg',
      email: 'stevenspielberg@cinema.com',
      phone: '4455887799',
      address: 'Spielberg Street'
    },
    {
      id: 3,
      name: 'Martin Scorsese',
      email: 'martinscorsese@cinema.com',
      phone: '5566778899',
      address: 'Scorsese Avenue'
    },
    {
      id: 4,
      name: 'Quentin Tarantino',
      email: 'quentintarantino@cinema.com',
      phone: '6677889900',
      address: 'Tarantino Boulevard'
    },
    {
      id: 5,
      name: 'Sofia Coppola',
      email: 'sofiacoppola@cinema.com',
      phone: '7788990011',
      address: 'Coppola Lane'
    },
    {
      id: 6,
      name: 'Christopher Nolan',
      email: 'christophernolan@cinema.com',
      phone: '8899001122',
      address: 'Nolan Drive'
    },
    {
      id: 7,
      name: 'Guillermo del Toro',
      email: 'guillermodeltoro@cinema.com',
      phone: '9900112233',
      address: 'del Toro Way'
    },
    {
      id: 8,
      name: 'Wes Anderson',
      email: 'wesanderson@cinema.com',
      phone: '1122334455',
      address: 'Anderson Court'
    },
    {
      id: 9,
      name: 'Greta Gerwig',
      email: 'gretagerwig@cinema.com',
      phone: '2233445566',
      address: 'Gerwig Terrace'
    },
    {
      id: 10,
      name: 'Alfonso Cuarón',
      email: 'alfonsocuaron@cinema.com',
      phone: '3344556677',
      address: 'Cuarón Plaza'
    }
  ]

}
