import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrderComponent } from './list-order/list-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    ListOrderComponent, 
    AddOrderComponent, 
    ViewOrderComponent, SkillsComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule
  ]
})
export class OrderModule { }
