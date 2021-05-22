import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSalesmanComponent } from './list-salesman/list-salesman.component';
import { AddSalesmanComponent } from './add-salesman/add-salesman.component';
import { ViewSalesmanComponent } from './view-salesman/view-salesman.component';


const routes: Routes = [
  { path: '', component: ListSalesmanComponent , data: {title: 'Salesman'}},
  { path: 'add', component: AddSalesmanComponent , data: {title: 'Add Salesman'}},
  { path: 'edit/:id', component: AddSalesmanComponent , data: {title: 'Update Salesman'}},
  { path: 'view/:id', component: ViewSalesmanComponent , data: {title: 'View Salesman'}},
  
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesmanRoutingModule { }
