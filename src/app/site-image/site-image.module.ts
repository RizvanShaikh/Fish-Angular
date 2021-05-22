import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteImageRoutingModule } from './site-image-routing.module';
import { ListSiteImageComponent } from './list-site-image/list-site-image.component';
import { AddSiteImageComponent } from './add-site-image/add-site-image.component';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileInputModule } from '../_shared/components/file-input/file-input.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ListSiteImageComponent, AddSiteImageComponent],
  imports: [
    CommonModule,
    SiteImageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule,
    FileInputModule,
    NgSelectModule

  ]
})
export class SiteImageModule { }
