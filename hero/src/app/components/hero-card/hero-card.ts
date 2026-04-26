import { Component, EventEmitter, input, Output } from '@angular/core';
import { Hero } from '../../hero.model';

@Component({
  selector: 'hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {

  hero = input.required<Hero>();

  @Output() onMissionDone = new EventEmitter<number>();


  notifyParent() {
    this.onMissionDone.emit(this.hero().id);
  }
}
