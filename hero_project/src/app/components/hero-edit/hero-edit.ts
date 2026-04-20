import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero.model';

@Component({
  selector: 'app-hero-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit {

  @Output() onHeroAdd = new EventEmitter<Hero>();

  @Input() hero: Hero = {} as Hero;

  addHero(){
    this.onHeroAdd.emit(this.hero);
  }
}
