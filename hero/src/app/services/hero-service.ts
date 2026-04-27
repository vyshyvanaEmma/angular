import { Injectable, signal } from '@angular/core';
import { Hero } from '../hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes = signal<Hero[]>([
    { id: 1, nome: 'Francesco', potere: 'Pisu', completata: false },
    { id: 2, nome: 'Emma', potere: 'Rabbia', completata: false },
    { id: 3, nome: 'Fibi', potere: 'Belezza', completata: false },
  ])

  addOrUpdate(dataHero: Omit<Hero, 'completata'>) {
    this.heroes.update(list => {
      const index = list.findIndex(h => h.id === dataHero.id);
      if (index !== -1) {
        return list.map(h => h.id === dataHero.id ? { ...h, ...dataHero } : h);
      }
      return [...list, { ...dataHero, completata: false }];
    });
  }

  markAsDone(id: number) {
    this.heroes.update(list => list.map(h => h.id === id ? { ...h, completata: true } : h));
  }
}
