import { Component, computed, signal } from '@angular/core';
import { Hero } from '../../hero.model';
import { HeroCard } from "../hero-card/hero-card";
import { HeroEdit } from "../hero-edit/hero-edit";

@Component({
  selector: 'hero-list',
  imports: [HeroCard, HeroEdit],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {
  heroes = signal<Hero[]>([
    { id: 1, nome: 'Francesco', potere: 'Pisu', completata: false },
    { id: 2, nome: 'Emma', potere: 'Rabbia', completata: false },
    { id: 3, nome: 'Fibi', potere: 'Belezza', completata: false },
  ])

  totalCompleted = computed(() => this.heroes().filter(h => h.completata).length);

  selectedHero = signal<Hero | null>(null)

  selectHero(hero: Hero){
    this.selectedHero.set(hero);
  }

  markAsDone(heroId: number) {
    this.heroes.update(curHeroes => curHeroes.map(h => h.id === heroId ? { ...h, completata: true } : h))
  }

  addHero(dataHero: { id: number, nome: string, potere: string }) {

    const heroes = this.heroes()
    const pos = heroes.findIndex(h => h.id === dataHero.id)

    //controllo se id è esistente
    if(pos !== -1){
      this.heroes.update(list => list.map(h => h.id === dataHero.id ? { ...h, ...dataHero } : h))

      this.selectedHero.set(null)

      return
    }
    /*
    // some - controllo se un elemento dell'array sodisfa le condizioni
    const esistente = this.heroes().some(h => h.id == dataHero.id)

    if (esistente) {
      alert(`Errore l'eroe con id ${dataHero.id} esiste gia' `)
      return
    }*/

    const newHero: Hero = {
      ...dataHero,
      completata: false
    }

    //per aggiungere un nuovo eroe al array (bisogna fare sempre update siccome si usa signal)
    this.heroes.update(liste => [...liste, newHero])
  }
}
