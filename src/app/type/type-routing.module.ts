import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTypeComponent } from './list-type/list-type.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { ViewTypeComponent } from './view-type/view-type.component';


const routes: Routes = [
  { path: '', component: ListTypeComponent, data: {title: 'Type'} },
  { path: 'add', component: AddTypeComponent, data: {title: 'Add Type'} },
  { path: 'edit/:id', component: AddTypeComponent, data: {title: 'Update Type'} },
  { path: 'view/:id', component: ViewTypeComponent, data: {title: 'View Type'} },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRoutingModule { }
