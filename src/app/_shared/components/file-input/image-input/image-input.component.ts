import swal from 'sweetalert2';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent implements OnInit {

  @Input() previewUrl: any = null;

  @Output() fileChangeEvent = new EventEmitter<File> ();

  fileData: File = null;
  imageEle : any = null;

  constructor() { }

  ngOnInit() {
  }

  fileProgress(fileInput: any, imageEle: any) {
    this.imageEle = imageEle;
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
    this.fileChangeEvent.emit(this.fileData);
  }



  preview() {
    // Show preview 
    console.log("fileData: ", this.fileData)

    console.log("imageEle: ", this.imageEle)
    console.log("imageEle.clientWidth: ", this.imageEle.clientWidth)
    console.log("imageEle.clientHeight: ", this.imageEle.clientHeight)

    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      this.fileData = null;
      swal.fire('', 'please select image', 'error');
      return;
    }

    var size = this.fileData.size;
    var maxSize =  (1048576*2) // 2 MB
    if(size > maxSize){
      this.fileData = null;
      swal.fire('', 'maximum size 2 MB', 'error');
      return;
    }


    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = () => {

      console.log("reader:", this)
      this.previewUrl = reader.result;
    }



  }


}
