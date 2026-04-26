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

  markAsDone(heroId: number) {
    this.heroes.update(curHeroes => curHeroes.map(h => h.id === heroId ? { ...h, completata: true } : h))
  }

  addHero(dataHero: { id: number, nome: string, potere: string }) {

    // some - controllo se un elemento dell'array sodisfa le condizioni
    const esistente = this.heroes().some(h => h.id == dataHero.id)

    if (esistente) {
      alert(`Errore l'eroe con id ${dataHero.id} esiste gia' `)
      return
    }

    const newHero: Hero = {
      id: dataHero.id,
      nome: dataHero.nome,
      potere: dataHero.potere,
      completata: false
    }

    //per aggiungere un nuovo eroe al array (bisogna fare sempre update siccome si usa signal)
    this.heroes.update(liste => [...liste, newHero])
  }
}
