import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipePipe, StatusPipe, imageUrl } from './custom-pipe.pipe';



@NgModule({
  declarations: [
    CustomPipePipe, 
    StatusPipe,
    imageUrl
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StatusPipe,
    imageUrl
  ]
})
export class CustomPipeModule { }
