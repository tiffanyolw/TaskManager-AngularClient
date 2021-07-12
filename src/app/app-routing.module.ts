import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "tasks"},
  { path: "tasks", component: TasksComponent},
  { path: "add-task", component: AddTaskComponent},
  { path: "**", component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
