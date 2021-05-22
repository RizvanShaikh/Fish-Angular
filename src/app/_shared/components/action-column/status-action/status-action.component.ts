import Swal from 'sweetalert2';
import { Component, OnInit, Input } from '@angular/core';
import { ActionColumnService } from '../action-column.service';


@Component({
  selector: 'app-status-action',
  templateUrl: './status-action.component.html',
  styleUrls: ['./status-action.component.css']
})
export class StatusActionComponent implements OnInit {

  @Input() obj = null;
  @Input() changeStatusUrl = null;
  @Input() canChangeStatus : boolean = false;

  constructor(private _actionService : ActionColumnService) { }

  ngOnInit() {
  }

  changeStatus(){
    
    if(this.canChangeStatus){
      Swal.fire({
        title: 'Are you sure?',
        text: "You will be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.value) {
  
          let body = { 'is_active': !this.obj.is_active}
  
          this._actionService.changeStatus(this.changeStatusUrl, this.obj.id, body).subscribe(
            (response)=>{
              if(response.success){
                this.obj.is_active = response.data.is_active;
              }
            }
          );
  
        }
      })
    }


  }


}
