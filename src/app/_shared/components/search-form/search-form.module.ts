import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form.component';



@NgModule({
  declarations: [SearchFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SearchFormComponent
  ]
})
export class SearchFormModule { }
