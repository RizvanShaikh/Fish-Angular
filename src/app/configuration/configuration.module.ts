import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UpdateConfigurationComponent } from './update-configuration/update-configuration.component';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ConfigurationComponent, UpdateConfigurationComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule,
    NgSelectModule
  ]
})
export class ConfigurationModule { }
