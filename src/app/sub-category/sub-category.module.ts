import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubCategoryRoutingModule } from './sub-category-routing.module';
import { ListSubCategoryComponent } from './list-sub-category/list-sub-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { FormValidationModule } from '../_form-validation/form-validation.module';


@NgModule({
  declarations: [
    ListSubCategoryComponent, 
    AddSubCategoryComponent
  ],
  imports: [
    CommonModule,
    SubCategoryRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule
  ]
})
export class SubCategoryModule { }
