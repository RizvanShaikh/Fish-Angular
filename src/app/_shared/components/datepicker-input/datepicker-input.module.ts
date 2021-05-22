import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerInputComponent } from './datepicker-input/datepicker-input.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatepickerInputComponent],
  imports: [
    CommonModule,
    BsDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    DatepickerInputComponent
  ]
})
export class DatepickerInputModule { }
