import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSubCategoryComponent } from './list-sub-category/list-sub-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';


const routes: Routes = [
  { path: '', component: ListSubCategoryComponent, data: {title: 'SubCategory'} },
  { path: 'add', component: AddSubCategoryComponent, data: {title: 'Add SubCategory'} },
  { path: 'edit/:id', component: AddSubCategoryComponent, data: {title: 'Update SubCategory'} },
  
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryRoutingModule { }
