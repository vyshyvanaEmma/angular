import { Component, EventEmitter, input, Output } from '@angular/core';
import { Hero } from '../../hero.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hero-card',
  imports: [CommonModule],
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
