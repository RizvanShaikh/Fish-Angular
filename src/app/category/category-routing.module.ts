import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';


const routes: Routes = [
  {
    path: '', component: ListCategoryComponent , data: {title: 'Category'}
  },
  {
    path: 'add', component: AddCategoryComponent , data: {title: 'Add Category'}
  },
  {
    path: 'edit/:id', component: AddCategoryComponent , data: {title: 'Update Category'}
  },
  {
    path: 'view/:id', component: ViewCategoryComponent , data: {title: 'View Category'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
