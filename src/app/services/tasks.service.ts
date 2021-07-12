import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private serverUrl = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serverUrl);
  }

  createTask(data: Object): Observable<Task> {
    return this.http.post<Task>(this.serverUrl, data);
  }
}
