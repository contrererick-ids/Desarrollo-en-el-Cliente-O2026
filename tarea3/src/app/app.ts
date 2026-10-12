import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './pages/side-bar/side-bar';
import "bootstrap-icons/font/bootstrap-icons.css";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

console.log('logSysPrint-app.ts: App component initialized');