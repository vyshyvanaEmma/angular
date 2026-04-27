import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'hero-edit',
  imports: [FormsModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit /*implements OnChanges*/ {


  // per leggere i parametri dell'URL
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private heroService = inject(HeroService)

  /*// riceve l eroe da modificare
  @Input() editHero: Hero | null = null;*/

  nome = ''
  potere = ''
  id: number | null = null;


  ngOnInit(){
    // legge id dal param
    const idParam = this.route.snapshot.paramMap.get('id')
    
    if(idParam) {
      const hero = this.heroService.heroes().find(h => h.id === +idParam)

      if(hero){
        this.id = hero.id
        this.nome = hero.nome
        this.potere = hero.potere
      }
    }
  }

  /*@Output() onAddHero = new EventEmitter<Omit<Hero, 'completata'>>()

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editHero'] && this.editHero) {
      this.id = this.editHero.id
      this.nome = this.editHero.nome
      this.potere = this.editHero.potere
    }
  }*/

  aggiungi() {
    if (this.nome && this.potere && this.id !== null) {
      
      this.heroService.addOrUpdate({
        id: this.id, 
        nome: this.nome,
        potere: this.potere
      })

      this.router.navigate(['/'])
      
      /*this.onAddHero.emit({ id: this.id, nome: this.nome, potere: this.potere })

      this.resetForm()*/
    } /*else {
      alert("Inserisci tutti i dati e un id valido")
    }*/
  }

  /*resetForm() {
    this.id = null;
    this.nome = '';
    this.potere = '';
  }*/
}
