import { Component } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiservice: UiService, private router: Router){
    this.subscription = this.uiservice.onToggle().subscribe((value) => this.showAddTask = value)
  }

  toggleTaskForm(){
    this.uiservice.toggleAddtask();
  }

  hasRoute(route: string): boolean{
    return this.router.url === route
  }
}
