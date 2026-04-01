import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../hero.model';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {


  // Definizione di Input e Output

  // ! - per far capire che il dato che si riceve in input proviene dal padre
  @Input() hero!: Hero;

  //creazione di un canale che trasmettera un muner (id)
  @Output() onMissionDone = new EventEmitter<number>(); 

  // funzione per emette id dell'eroe sul click del pulsante
  notifyParent() {
    this.onMissionDone.emit(this.hero.id);
  }
}
