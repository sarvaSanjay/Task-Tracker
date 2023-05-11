import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
})

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }

  updateReminder(task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task)
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task)
  }
}
