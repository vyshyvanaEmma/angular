import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Box } from './box/box';
import { Box2 } from './box2/box2';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Counter, Box, Box2],
  templateUrl: './app4.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'App Angular';

  x = 10;

  /*students = [
    {id: 1, fn: 'Francesco', ln: 'Perrotta'},
    {id: 2, fn: 'Emma', ln: 'Vyshyvana'},
    {id: 3, fn: 'Gianlorenzo', ln: 'Spataro'},
    {id: 4, fn: 'Ciufe', ln: 'Fibi'}
  ]*/

  students = signal([
    { id: 1, fn: 'Francesco', ln: 'Perrotta' },
    { id: 2, fn: 'Emma', ln: 'Vyshyvana' },
    { id: 3, fn: 'Gianlorenzo', ln: 'Spataro' },
    { id: 4, fn: 'Ciufe', ln: 'Fibi' }
  ])

  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2) // per creare un nuovo valore (couble counter) in base a un altro (counter)
  tripleCounter = computed(() => this.counter() * 3)

  text = signal('');
  text2 = signal('');

  startCounter = signal(100)

  number = signal(10)

  increaseCounter() {
    this.counter.update(v => v + 1)
  }

  decreaseCounter() {
    this.counter.update(v => v - 1)
  }

  setCounter(v: number) {
    this.counter.set(v)
  }

  addStudent() {
    const id = this.students().length + 1;

    const newStudent = {
      id: id,
      fn: 'New Student First Name',
      ln: 'New Student Last Name'
    }

    this.students.update(v => [...v, newStudent]) // [...v] - prende i valori precedenti di v (studenti gia' presenti)
  }

  updateStudentInfo(id: number) {
    this.students.update(v => v.map(student => student.id === id ? { ...student, ln: 'Mizya' } : student) // map - per cercare in un array
    )
  }

  orderStudentsByRandom() {
    this.students.update(v => v.sort(() => Math.random() - 0.5))  //sort - per modificare l'ordine dell'array
  }

  setText2(e: Event) {
    if (e.target instanceof HTMLInputElement) {     // per verificare che l elemento deriva da input html
      this.text2.set(e.target.value)
    }
  }

  increaseStartCounter(){
    this.startCounter.update(v => v + 1);
  }

  messageReceived = signal('')

  onMessageReceived(e: {message: string}) {
    this.messageReceived.set(e.message)
  }
}
