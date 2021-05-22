import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSiteImageComponent } from './list-site-image/list-site-image.component';
import { AddSiteImageComponent } from './add-site-image/add-site-image.component';

const routes: Routes = [
  { path: '', component: ListSiteImageComponent , data: {title: 'Site Image'}},
  { path: 'add', component: AddSiteImageComponent , data: {title: 'Add Site Image'}},
  { path: 'edit/:id', component: AddSiteImageComponent , data: {title: 'Update Site Image'}},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteImageRoutingModule { }
