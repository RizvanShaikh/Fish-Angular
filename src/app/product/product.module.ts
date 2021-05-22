import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { CustomPipeModule } from '../_shared/custom-pipe/custom-pipe.module';
import { FileInputModule } from '../_shared/components/file-input/file-input.module';


@NgModule({
  declarations: [
    ListProductComponent, 
    AddProductComponent, 
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule,
    CustomPipeModule,
    FileInputModule,
  ]
})
export class ProductModule { }
