import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  todoList = [{
    itemName: 'Coding',
    itemDueDate: '13-10-21',
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
    itemDueDate: '13-10-21',
    itemPriority: 'middle',
    itemCategory: 'Personnel'
  }
];

  constructor() {}

}
