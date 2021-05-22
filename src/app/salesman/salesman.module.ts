import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';
import { ListSalesmanComponent } from './list-salesman/list-salesman.component';
import { AddSalesmanComponent } from './add-salesman/add-salesman.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { FileInputModule } from '../_shared/components/file-input/file-input.module';
import { CustomPipeModule } from '../_shared/custom-pipe/custom-pipe.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ViewSalesmanComponent } from './view-salesman/view-salesman.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ListSalesmanComponent, 
    AddSalesmanComponent, ViewSalesmanComponent
  ],
  
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule,
    CustomPipeModule,
    FileInputModule,
    BsDatepickerModule
  ]
})
export class SalesmanModule { }
