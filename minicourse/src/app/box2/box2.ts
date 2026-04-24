import { SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CapitalizePipe } from '../capitalize-pipe';
import { Students } from '../services/students';
import Student from '../types/student.type';

@Component({
  selector: 'box2',
  imports: [SlicePipe, UpperCasePipe, CapitalizePipe],
  templateUrl: './box2.html',
  styleUrl: './box2.css',
})
export class Box2 {
  description = "dsahdksahfkjsahjfsakjgfdgfdghjkfdhjgkhsjkdhfjkdshfjkdshkjf"

  word = 'angular'

  students = inject(Students)

  studentsList = signal<Student[]>([])

  bestStudent = computed(() => this.students.getBest(this.studentsList()))

  ngOnInit(){
    this.studentsList.set(this.students.students)
  }

  addStudent() {
    this.studentsList.update(v=> [...v, {id: 5, fullname: "pisu", rate: 100000}] )
  }
}
