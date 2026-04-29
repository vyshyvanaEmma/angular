import { Component, computed, inject, signal } from '@angular/core';
import { Hero } from '../../hero.model';
import { HeroCard } from "../hero-card/hero-card";
import { HeroEdit } from "../hero-edit/hero-edit";
import { HeroService } from '../../services/hero-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'hero-list',
  imports: [HeroCard, HeroEdit],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {

  heroService = inject(HeroService)
  private router = inject(Router)


  heroes = toSignal(this.heroService.getHeroes(), { initialValue: [] });


  totalCompleted = computed(() => this.heroes().filter(h => h.completata).length);

  vaiAEdit(id: string) {
    this.router.navigate(['/edit', id])
  }

  markAsDone(heroId: string) {
    const heroToUpdate = this.heroes().find(h => h._id === heroId);

    if (heroToUpdate) {
      // Creiamo l'oggetto aggiornato
      const updatedHero = { ...heroToUpdate, completata: true };

      this.heroService.modifyHero(heroId, updatedHero).subscribe({
        next: () => {
          console.log('Missione completata con successo!');
          window.location.reload();
        },
        error: (err) => console.error('Errore durante la missione:', err)
      });
    }
  }

  /*selectedHero = signal<Hero | null>(null)

  selectHero(hero: Hero){
    this.selectedHero.set(hero);
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

  /*const newHero: Hero = {
    ...dataHero,
    completata: false
  }

  //per aggiungere un nuovo eroe al array (bisogna fare sempre update siccome si usa signal)
  this.heroes.update(liste => [...liste, newHero])
}*/
}
