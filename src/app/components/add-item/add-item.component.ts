import { Component, EventEmitter, Output } from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  text!: string;
  day!: string;
  reminder: boolean = false;
  showForm: boolean = false;
  subscription !: Subscription;
  @Output() createTask: EventEmitter<Task> = new EventEmitter

  constructor(private uiservice: UiService){
    this.subscription = this.uiservice.onToggle().subscribe((value) => this.showForm = value);
  }

  onSubmit(){
    if (!this.text){
      alert('Please provide a task!');
      return;
    }
    else if(!this.day){
      alert('Please provide a day');
      return;
    }

    const newTask: Task = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }

    this.createTask.emit(newTask)

    this.day = '';
    this.text = '';
    this.reminder = false;
  }
}
