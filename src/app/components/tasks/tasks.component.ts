import { Component } from '@angular/core';
import {Task} from '../../Task'
import {TaskServiceService} from '../../services/task-service.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks!: Task[]

  constructor(private taskService: TaskServiceService){}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task): void{
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id != task.id))
  }

  toggleReminder(task: Task): void{
    task.reminder = !task.reminder
    this.taskService.updateReminder(task).subscribe()
  }

  addTask(task: Task): void{
    this.taskService.addTask(task).subscribe((t) => this.tasks.push(t))
  }
}
