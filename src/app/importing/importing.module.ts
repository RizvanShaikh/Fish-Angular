import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportingRoutingModule } from './importing-routing.module';
import { AddImportingComponent } from './add-importing/add-importing.component';
import { ListImportingComponent } from './list-importing/list-importing.component';
import { ViewImportingComponent } from './view-importing/view-importing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { FormValidationModule } from '../_form-validation/form-validation.module';


@NgModule({
  declarations: [AddImportingComponent, ListImportingComponent, ViewImportingComponent],
  imports: [
    CommonModule,
    ImportingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule
  ]
})
export class ImportingModule { }
