import { Component, EventEmitter, inject, Input, OnChanges, Output, signal, Signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero.model';
import { ActivatedRoute, Router, } from '@angular/router';
import { HeroService } from '../../services/hero-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hero-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit /*implements OnChanges*/ {



  /*// riceve l eroe da modificare
  @Input() editHero: Hero | null = null;*/

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private heroService = inject(HeroService);

  hero = signal<Hero>({ nome: '', potere: '', completata: false } as Hero);

  constructor() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      // subscribe - per poter scrivere nel segnale
      this.heroService.getHeroe(idParam).subscribe(h => this.hero.set(h));
    }
  }



  /*ngOnInit() {
    // legge id dal param
  }*/

  /*@Output() onAddHero = new EventEmitter<Omit<Hero, 'completata'>>()

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editHero'] && this.editHero) {
      this.id = this.editHero.id
      this.nome = this.editHero.nome
      this.potere = this.editHero.potere
    }
  }*/

  aggiungi() {
    const heroData = this.hero();

    if (heroData._id) {
      // modifica (put)
      this.heroService.modifyHero(heroData._id, heroData).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Errore modifica:', err)
      });
    } else {
      // aggiunta (post)
      const { _id, ...nuovoEroe } = heroData;

      this.heroService.addHero(nuovoEroe as Hero).subscribe({
        next: () => {
          console.log('Eroe aggiunto con successo!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Errore aggiunta:', err);
         }
      });
    }

    /*const heroData = this.hero();
    if (heroData._id) {
      this.heroService.modifyHero(heroData._id, heroData).subscribe(() => {
        // Torna alla lista dopo la modifica
      });
    }*/
    /*
    if (this.nome && this.potere) {
  
      this.heroService.addHero({
        nome: this.nome,
        potere: this.potere
      } as Hero).subscribe({
        next: (savedHero) => {
          console.log('Eroe aggiunto:', savedHero);
        },
        error: (err) => console.error('Errore nell\'aggiunta eroe', err)
      });
  
      this.router.navigate(['/'])
      */

    /*this.onAddHero.emit({ id: this.id, nome: this.nome, potere: this.potere })
  
    this.resetForm()*/
  }

  /*resetForm() {
    this.id = null;
    this.nome = '';
    this.potere = '';
  }*/
}
