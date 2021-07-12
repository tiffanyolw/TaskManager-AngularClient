import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  form: FormGroup;

  constructor(private _service: TasksService, private builder: FormBuilder) {
    this.form = builder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      task_date: ["", [Validators.required]],
      priority_level: ["", [Validators.required]],
      category: ["", [Validators.required]],
      progress_level: ["", [Validators.required]]
    });
  }

  addTask() {
    this._service.createTask(this.form.value).subscribe((result) => {
      alert(`${result.title} has been added successfully`);

      this.form.reset();
    }, (err) => {
      console.log(err);
    });
  }

  get titleControl() {
    return this.form.get("title");
  }

  get descControl() {
    return this.form.get("description");
  }

  get categoryControl() {
    return this.form.get("category");
  }

  get dateControl() {
    return this.form.get("task_date");
  }

  get priorityControl() {
    return this.form.get("priority_level");
  }

  get progressControl() {
    return this.form.get("progress_level");
  }

  ngOnInit(): void {
  }

}
