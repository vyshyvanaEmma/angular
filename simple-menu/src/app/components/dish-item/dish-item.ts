import { Component, input, output} from '@angular/core';
import { Piatto } from '../../../piatto.model';

@Component({
  selector: 'app-dish-item',
  imports: [],
  templateUrl: './dish-item.html',
  styleUrl: './dish-item.css',
})
export class DishItem {
  // input 
  piatto = input.required<Piatto>();

  //output
  cambioQuantita = output<number>();

  modifica(valore: number) {
    this.cambioQuantita.emit(valore);
  }
}
