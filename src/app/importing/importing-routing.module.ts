import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListImportingComponent } from './list-importing/list-importing.component';
import { AddImportingComponent } from './add-importing/add-importing.component';
import { ViewImportingComponent } from './view-importing/view-importing.component';


const routes: Routes = [
  { path: '', component: ListImportingComponent, data: {title: 'Importing'} },
  { path: 'add', component: AddImportingComponent, data: {title: 'Add Importing'}  },
  { path: 'edit/:id', component: AddImportingComponent, data: {title: 'Update Importing'}  },
  { path: 'view/:id', component: ViewImportingComponent, data: {title: 'View Importing'}  },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportingRoutingModule { }
