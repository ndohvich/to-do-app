import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories = ['Work', 'Personnal', 'Home'];

  taskName;
  taskDate;
  taskPriority;
  taskCategory;

taskObject;
constructor(public modalCtrl: ModalController) { }

ngOnInit() {
}

async dissmis(){
  await this.modalCtrl.dismiss(this.taskObject);
}

selectedCategory(index){
  this.taskCategory = this.categories[index];
}

// eslint-disable-next-line @typescript-eslint/naming-convention
AddTask(){
  this.taskObject = ({itemName:this.taskName, itemDueDate:this.taskDate, itemPriority:this.taskPriority, itemCategory:this.taskCategory});
  this.dissmis();
}

}
