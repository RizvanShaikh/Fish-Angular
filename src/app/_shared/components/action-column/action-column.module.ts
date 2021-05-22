import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusActionComponent } from './status-action/status-action.component';
import { DeleteActionComponent } from './delete-action/delete-action.component';



@NgModule({
  declarations: [StatusActionComponent, DeleteActionComponent],
  imports: [
    CommonModule
  ],
  exports:[StatusActionComponent, DeleteActionComponent]
})
export class ActionColumnModule { }
