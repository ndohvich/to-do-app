import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  todoList = [{
    itemName: 'Coding',
    itemDueDate: '10-13-21',
    itemPriority: 'high',
    itemCategory: 'Work'
  },
  {
    itemName: 'Design',
    itemDueDate: '03-10-21',
    itemPriority: 'low',
    itemCategory: 'Work'
  },
  {
    itemName: 'Shopping',
    itemDueDate: '10-23-21',
    itemPriority: 'middle',
    itemCategory: 'Personnel'
  },
  {
    itemName: 'Workout',
    itemDueDate: '05-10-21',
    itemPriority: 'high',
    itemCategory: 'Personnel'
  }
];

  today: number = Date.now();
  constructor() {}

}
