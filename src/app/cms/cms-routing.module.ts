import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCmsComponent } from './list-cms/list-cms.component';
import { AddCmsComponent } from './add-cms/add-cms.component';


const routes: Routes = [
  { path: '', component: ListCmsComponent, data: {title: 'Cms'} },
  { path: 'add', component: AddCmsComponent, data: {title: 'Add Cms'}  },
  { path: 'edit/:id', component: AddCmsComponent, data: {title: 'Update Cms'}  },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
