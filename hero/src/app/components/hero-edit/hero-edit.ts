import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero.model';

@Component({
  selector: 'hero-edit',
  imports: [FormsModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit {
  nome = ''
  potere =''
  id = -1;

  @Output() onAddHero = new EventEmitter<Omit<Hero, 'completata'>>()

  aggiungi(){
    if(this.nome && this.potere && this.id !== -1){
      this.onAddHero.emit({ id: this.id, nome: this.nome, potere: this.potere })

      this.id = -1;
      this.nome = ''
      this.potere =''
    } else{
      alert("Inserisci tutti i dati e un id valido")
    }
  }
}
