import { Injectable } from '@angular/core';
import Student from '../types/student.type';

@Injectable({
  providedIn: 'root',
})
export class Students {

  students = [
    {id: 1, fullname: 'Francesco Perrotta', rate: 10},
    {id: 2, fullname: 'EmmaVyshyvana', rate: 8},
    {id: 3, fullname: 'Gianlorenzo Spataro', rate: 9},
    {id: 4, fullname: 'Ciufe e Fibi', rate: 1000}
  ]

  getBest(students: Student[] | null = null): Student | null{
    const _students = students ?? this.students

    if(!_students.length) return null;

    let best = _students[0];
    for(const student of _students){
      if(student.rate > best.rate){
        best = student;
      }
    }

    return best;
  }

  constructor() {

  }
}
