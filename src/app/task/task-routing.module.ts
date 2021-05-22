import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';


const routes: Routes = [
  { path: '', component: ListTaskComponent , data: {title: 'Task'}},
  { path: 'add', component: AddTaskComponent , data: {title: 'Add Task'}},
  { path: 'edit/:id', component: AddTaskComponent , data: {title: 'Update Task'}},
  { path: 'view/:id', component: ViewTaskComponent , data: {title: 'View Task'}},
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
