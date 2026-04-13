import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardList } from './components/hero-card-list/hero-card-list';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeroCardList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
