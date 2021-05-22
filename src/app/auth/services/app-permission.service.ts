import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppPermissionService {

  private currentPermission = null;

  constructor(private _authService: AuthService
  ) { 

  }

  public getModelPermissionList(model) {
    // redirect to home if already logged in
    if (this._authService.currentPermissionValue) {
      let permissions =  this._authService.currentPermissionValue.permission;
      return permissions[model]
    }
    return false;
}

  public checkPermission(model, action) {
      // redirect to home if already logged in
      
      if (this._authService.currentPermissionValue) {
        let permissions =  this._authService.currentPermissionValue.permission;

        if(permissions[model]){
          console.log("model: ", model);
          return true;
        }
        else{
          return false;
        }
      }
      return false;
  }




}
