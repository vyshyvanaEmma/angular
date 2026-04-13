import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../hero.model';
import { HeroCard } from '../hero-card/hero-card'; 

@Component({
  selector: 'app-hero-card-list',
  imports: [CommonModule, HeroCard],
  templateUrl: './hero-card-list.html',
  styleUrl: './hero-card-list.css',
})
export class HeroCardList {

  totalCompleted: number = 0;

  heroes: Hero[] = [
    { id: 1, nome: 'Spider-Man', potere: 'Ragnatele', completata: false },
    { id: 2, nome: 'Iron Man', potere: 'Armatura', completata: false },
    { id: 3, nome: 'Hulk', potere: 'Forza', completata: false }
  ];

  //conta queìante missioni sono finite
  /*totalCompleted() {
    return this.heroes().filter(h => h.completata).length;
  }*/


  markAsDone(hero: Hero) {
    hero.completata = true;
    this.totalCompleted = this.heroes.filter((hero) => hero.completata).length;
  }
}
