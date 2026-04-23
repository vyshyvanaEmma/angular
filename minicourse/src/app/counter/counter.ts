import { Component, signal } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = signal(0)

  increaseCounter() {
    this.counter.update(v => v + 1)
  }
}
