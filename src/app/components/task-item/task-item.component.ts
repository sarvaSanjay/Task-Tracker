import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import {faTimes, faToggleOff, faToggleOn} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  faTimes = faTimes;
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter;
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter;
  
  onDelete(task: Task){
    this.deleteTask.emit(task);
    console.log('hi')
  }

  onToggleReminder(task: Task){
    this.toggleReminder.emit(task);
  }
}
