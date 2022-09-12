import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

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

  constructor(public modalCtrl: ModalController) {}

  async  addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });

    return await modal.present();
  }

}
