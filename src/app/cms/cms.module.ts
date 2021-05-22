import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { ListCmsComponent } from './list-cms/list-cms.component';
import { AddCmsComponent } from './add-cms/add-cms.component';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [ListCmsComponent, AddCmsComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule,
    CKEditorModule
  ]
})
export class CmsModule { }
