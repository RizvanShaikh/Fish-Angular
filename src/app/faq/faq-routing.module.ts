import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFaqComponent } from './list-faq/list-faq.component';
import { AddFaqComponent } from './add-faq/add-faq.component';


const routes: Routes = [
  { path: '', component: ListFaqComponent, data: {title: 'Faq'} },
  { path: 'add', component: AddFaqComponent, data: {title: 'Add Faq'}  },
  { path: 'edit/:id', component: AddFaqComponent, data: {title: 'Update Faq'}  },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
