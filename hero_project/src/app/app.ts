import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero.model';
import { HeroCard } from './components/hero-card/hero-card';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeroCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  heroes = signal<Hero[]>([
    { id: 1, nome: 'Spider-Man', potere: 'Ragnatele', completata: false },
    { id: 2, nome: 'Iron Man', potere: 'Armatura', completata: false },
    { id: 3, nome: 'Hulk', potere: 'Forza', completata: false }
  ]);

  //conta queìante missioni sono finite
  totalCompleted = computed(() =>
    this.heroes().filter(h => h.completata).length
  );


  //riceve l'id del figlio e aggiorna lo stato dell'eroe
  markAsDone(id: number) {
    //ricerca dell'eroe con id
    this.heroes.update(oldHeroes =>
      oldHeroes.map(h => h.id === id ? { ...h, completata: true } : h)
    );
  }

  protected readonly title = signal('hero_project');
}
