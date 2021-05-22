import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrderComponent } from './list-order/list-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: '', component: ListOrderComponent, data: {title: 'order'} },
  { path: 'add', component: AddOrderComponent, data: {title: 'Add order'}  },
  { path: 'edit/:id', component: AddOrderComponent, data: {title: 'Update order'}  },
  { path: 'view/:id', component: ViewOrderComponent, data: {title: 'View order'}  },
  
  { path: 'skills', component: SkillsComponent, data: {title: 'order'} },


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
