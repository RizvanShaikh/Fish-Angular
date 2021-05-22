import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  { path: '', component: ListProductComponent , data: {title: 'Product'}},
  { path: 'add', component: AddProductComponent , data: {title: 'Add Product'}},
  { path: 'edit/:id', component: AddProductComponent , data: {title: 'Update Product'}},
  { path: 'view/:id', component: ViewProductComponent , data: {title: 'View Product'}},
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
