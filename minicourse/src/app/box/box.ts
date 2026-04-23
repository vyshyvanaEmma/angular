import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'box',
  imports: [NgClass, NgStyle],
  templateUrl: './box.html',
  styleUrl: './box.css',
})
export class Box {
  box = true
  boxSignal = signal(true);

  bg = signal('lightgreen')

  width = signal(200);


  isPrimary = signal(true)

  isDanger = signal(false)

  fontsize = 30

  toogleBoxSignal(){
    this.boxSignal.update(v => !v) // con !v - ritorna al valore precedente es. da true a false
  }

  toogleBg(){
    this.bg.update(v => v === 'lightgreen' ? 'orangered' : 'lightgreen')
  }

  increaseWidth(){
    this.width.update(v => v + 50);
  }
}
