import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/_services/role.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-permission',
  templateUrl: './update-permission.component.html',
  styleUrls: ['./update-permission.component.css']
})
export class UpdatePermissionComponent implements OnInit {

  roleId : string =  null;

  pageName : string = "update role permission";
  backUrl : string = '/role/view' ;

  availablePermissionList : Array<any> = [];

  isChecked: boolean = false;

  constructor(
    private _roleService: RoleService,
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 

    this.roleId = this._route.snapshot.paramMap.get('id');

    this.getAvailablePermissionList();
  }

  ngOnInit() {
    
  }

  getAvailablePermissionList(){

    this._roleService.getRolePermissionList(this.roleId).subscribe(
      (response)=>{

        this.availablePermissionList = response.data.available_permission_list ;

        this.availablePermissionList.forEach(permObj => {

          let all_selected = true;

          permObj.value.forEach(element => {

            if(!element.selected){
              all_selected = false;
            }
            
          });

          permObj['all_selected'] = all_selected
        });

      }
    );
  }



  onAllSelect(permObj){
    
    this.availablePermissionList.forEach(
      (ele)=>{
        if(ele.key == permObj.key){
          if(ele.all_selected){
            ele.value.forEach(val_ele => {
              val_ele['selected'] = true ;
            });
          }
          else{
            ele.value.forEach(val_ele => {
              val_ele['selected'] = false ;
            });
          }
        }
      }
    );

  }

  onPermSelect(permObj){

    this.availablePermissionList.forEach(
      (permObjEle)=>{
        if(permObjEle.key == permObj.key){
          let all_selected = true;

          permObj.value.forEach(element => {

            if(!element.selected){
              all_selected = false;
            }
            
          });

          permObjEle['all_selected'] = all_selected;

        }
      }
    );
  }
  
  updatePermission(){

    let selectedPermissionIds = [];
    this.availablePermissionList.forEach( (permObj)=>{
      permObj.value.forEach(element => {
        if(element.selected){
          selectedPermissionIds.push(element.id)
        }
        
      });
    });


    let formData = {
      'permission_ids' : selectedPermissionIds
    };
    this._roleService.updateRolePermissionList(this.roleId, formData).subscribe(
      (response)=>{
        console.log("\n ==> response: ", response)

        if(response.success){

          this._toastr.success('Pemission updated sucsessfully');
          this.goBack();

        }
      }
    );

  }

  goBack(){
    this._router.navigate([this.backUrl, this.roleId]);
  }

}
