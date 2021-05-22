import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}


@Pipe({
  name: 'StatusPipe'
})
export class StatusPipe implements PipeTransform {

  transform(value: boolean): any {
    if(value){
      return '<span class="badge badge-pill badge-success">Active</span>';
    }
    else{
      return '<span class="badge badge-pill badge-danger">Inactive</span>' 
    }
  }

}


@Pipe({
  name: 'imageUrl'
})
export class imageUrl implements PipeTransform {

  transform(value: string): any {
    if(!value){
      return 'assets/img/no_image.jpg';
    }
    return value;
  }

}