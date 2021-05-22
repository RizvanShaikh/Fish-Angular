import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRoleComponent } from './list-role/list-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';


const routes: Routes = [
  { path: '', component: ListRoleComponent , data: {title: 'Role'}},
  { path: 'add', component: AddRoleComponent , data: {title: 'Add Role'}},
  { path: 'edit/:id', component: AddRoleComponent , data: {title: 'Update Role'}},
  { path: 'view/:id', component: ViewRoleComponent , data: {title: 'View Role Permission'}},
  { path: 'update-permission/:id', component: UpdatePermissionComponent , data: {title: 'Update Role Permission'}},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
