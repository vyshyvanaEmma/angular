import { Component, signal, computed } from '@angular/core';
import { Piatto } from '../../../piatto.model';
import { DishItem } from '../dish-item/dish-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [DishItem, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  piatti: Piatto[] = [
    { id: 1, nome: 'Pizza Margherita', prezzo: 8, quantita: 0 },
    { id: 2, nome: 'Carbonara', prezzo: 12, quantita: 0 },
    { id: 3, nome: 'Tiramisù', prezzo: 6, quantita: 0 }
  ];

  totale: number = 0;

  /*totale() {
    return this.piatti().reduce((acc, p) => acc + (p.prezzo * p.quantita), 0);
  }*/

  aggiornaOrdine(variazione: number, piatto: Piatto) {
    piatto.quantita += variazione;
    this.totale += (variazione * piatto.prezzo);
  }
}
