import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/_services/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppPermissionService } from 'src/app/auth/services/app-permission.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  roleId : string = null;
  pageName : string = "view role permission";
  backUrl : string = '/role' ;

  availablePermissionList : Array<any> = [];

  isChecked: boolean = false;

  // permissions

  canEdit : boolean = false;
  rolePemissionList : Array<string> = [];

  constructor(
    private _roleService: RoleService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _appPermissionService: AppPermissionService,

  ) { 

    this.setPermissions();

    this.roleId = this._route.snapshot.paramMap.get('id');
    this.getAvailablePermissionList();
  }

  ngOnInit() {
    
  }

  setPermissions(): void {
    let model = 'role'
    this.rolePemissionList = this._appPermissionService.getModelPermissionList(model)
    this.canEdit  = this.rolePemissionList.includes('edit') ? true : false;
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


  goBack(){
    this._router.navigate([this.backUrl]);
  }

}
