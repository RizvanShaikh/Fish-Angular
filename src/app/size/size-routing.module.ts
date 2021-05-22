import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSizeComponent } from './add-size/add-size.component';
import { ViewSizeComponent } from './view-size/view-size.component';
import { ListSizeComponent } from './list-size/list-size.component';

const routes: Routes = [
{ path: '', component: ListSizeComponent , data: {title: 'Size'}},
{ path: 'add', component: AddSizeComponent , data: {title: 'Add Size'}},
{ path: 'edit/:id', component: AddSizeComponent , data: {title: 'Update Size'}},
{ path: 'view/:id', component: ViewSizeComponent , data: {title: 'View Size'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizeRoutingModule { }
