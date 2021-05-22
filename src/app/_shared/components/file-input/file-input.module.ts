import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageInputComponent } from './image-input/image-input.component';


@NgModule({
  declarations: [
    ImageInputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ImageInputComponent
  ]
})
export class FileInputModule { }
