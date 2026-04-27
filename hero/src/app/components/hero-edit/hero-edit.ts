import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero.model';

@Component({
  selector: 'hero-edit',
  imports: [FormsModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit implements OnChanges {

  // riceve l eroe da modificare
  @Input() editHero: Hero | null = null;

  nome = ''
  potere = ''
  id: number | null = null;

  @Output() onAddHero = new EventEmitter<Omit<Hero, 'completata'>>()

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editHero'] && this.editHero) {
      this.id = this.editHero.id
      this.nome = this.editHero.nome
      this.potere = this.editHero.potere
    }
  }

  aggiungi() {
    if (this.nome && this.potere && this.id !== null) {
      this.onAddHero.emit({ id: this.id, nome: this.nome, potere: this.potere })

      this.resetForm()
    } else {
      alert("Inserisci tutti i dati e un id valido")
    }
  }

  resetForm() {
    this.id = null;
    this.nome = '';
    this.potere = '';
  }
}
