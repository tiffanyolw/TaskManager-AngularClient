import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks!: Task[];

  constructor(private service: TasksService) {
    service.getTasks().subscribe((result) => {
      this.tasks = result;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
