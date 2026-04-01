import { Component, signal, computed } from '@angular/core';
import { Piatto } from '../../../piatto.model';
import { DishItem } from '../dish-item/dish-item';

@Component({
  selector: 'app-menu',
  imports: [DishItem],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  piatti = signal<Piatto[]>([
    { id: 1, nome: 'Pizza Margherita', prezzo: 8, quantita: 0 },
    { id: 2, nome: 'Carbonara', prezzo: 12, quantita: 0 },
    { id: 3, nome: 'Tiramisù', prezzo: 6, quantita: 0 }
  ]);

  totaleConto = computed(() => {
    return this.piatti().reduce((acc, p) => acc + (p.prezzo * p.quantita), 0);
  });

  aggiornaOrdine(variazione: number, id: number){
    this.piatti.update(listaAttuale => 
      listaAttuale.map(p =>
        p.id === id ? { ...p, quantita: p.quantita + variazione } : p
      )
    );
  }
}
