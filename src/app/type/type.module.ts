import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRoutingModule } from './type-routing.module';
import { AddTypeComponent } from './add-type/add-type.component';
import { ListTypeComponent } from './list-type/list-type.component';
import { ViewTypeComponent } from './view-type/view-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { FormValidationModule } from '../_form-validation/form-validation.module';


@NgModule({
  declarations: [AddTypeComponent, ListTypeComponent, ViewTypeComponent],
  imports: [
    CommonModule,
    TypeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule
  ]
})
export class TypeModule { }
