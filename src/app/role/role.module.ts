import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '../_shared/components/pagination/pagination.module';
import { SearchFormModule } from '../_shared/components/search-form/search-form.module';
import { ActionColumnModule } from '../_shared/components/action-column/action-column.module';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';


@NgModule({
  declarations: [
    AddRoleComponent, 
    ListRoleComponent, 
    ViewRoleComponent, 
    UpdatePermissionComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    SearchFormModule,
    ActionColumnModule,
    FormValidationModule  
  ]
})
export class RoleModule { }
