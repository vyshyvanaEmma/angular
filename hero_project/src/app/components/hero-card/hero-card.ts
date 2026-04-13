import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../hero.model';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {



  @Input() hero!: Hero;

  @Output() onMissionDone = new EventEmitter<Hero>(); 

  notifyParent() {
    this.onMissionDone.emit(this.hero);
  }
}
