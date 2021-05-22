import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeRoutingModule } from './size-routing.module';
import { AddSizeComponent } from './add-size/add-size.component';
import { ViewSizeComponent } from './view-size/view-size.component';
import { ListSizeComponent } from './list-size/list-size.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SizeService } from '../_services/size.service';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { FormValidationModule } from '../_form-validation/form-validation.module';


@NgModule({
  declarations: [
    AddSizeComponent,
    ViewSizeComponent,
    ListSizeComponent
],
  imports: [
    CommonModule,
    SizeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule
  ],
  providers: [
    SizeService
  ]
})
export class SizeModule { }
