import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Piatto } from '../../../piatto.model';

@Component({
  selector: 'app-dish-item',
  imports: [],
  templateUrl: './dish-item.html',
  styleUrl: './dish-item.css',
})
export class DishItem {
  // input 
  @Input({ required: true }) piatto!: Piatto;

  //output
  @Output() cambioQuantita = new EventEmitter<number>();

  modifica(valore: number) {
    this.cambioQuantita.emit(valore);
  }
}
