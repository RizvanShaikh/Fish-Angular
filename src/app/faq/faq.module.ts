import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { ListFaqComponent } from './list-faq/list-faq.component';
import { AddFaqComponent } from './add-faq/add-faq.component';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListFaqComponent, AddFaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule
  ]
})
export class FaqModule { }
