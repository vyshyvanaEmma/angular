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

  @Output() onMissionDone = new EventEmitter<string>();


  notifyParent() {
    this.onMissionDone.emit(this.hero()._id);
  }

  @Output() onDelete = new EventEmitter<string>();

  elimina(event: Event) {
    event.stopPropagation();

    this.onDelete.emit(this.hero()._id);

  }
}
