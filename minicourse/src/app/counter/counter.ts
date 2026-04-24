import { Component, effect, input, model, output, signal } from '@angular/core';

interface MessageData {
  message: string
}

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  title = input.required<string>()

  start = input(0)

  counter = signal(0)

  messageSent = output<MessageData>()

  sendMessage() {
    this.messageSent.emit({message: 'From child counter'})
  }

  //model - funge sia da input sia da output, permette al componente padre e figlio di leggere/scrivere sullo stesso valore
  num = model(0)

  increaseNum() {
    this.num.update(v => v + 1)
  }


  increaseCounter() {
    this.counter.update(v => v + 1)
  }


  // costructor - si usa per iniettare i servizi, quando si fa input risulta ancora non pronto e da valore di default
  constructor() {
    // effect - si usa per eseguire effetti collaterali ogni volta che i segnali al duo intrno cambiano
    effect(() => this.counter.set(this.start()))

    effect(() => {
      console.log(`Counter: ${this.counter}`)
    })
  }

  //ngOnInit - si usa per la logica di inizializzazione dagli input
  ngOnInit() {
    //this.counter.set(this.start())
  }
}
