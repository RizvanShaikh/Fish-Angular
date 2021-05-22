import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getRoleList(q_params: object) {

    let url = `${this.BACKEND_API}/role`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addRole(data) {
    let url = `${this.BACKEND_API}/role`;
    return this.http.post<any>(url, data);
  }


  editRole(id : string, data) {
    let url = `${this.BACKEND_API}/role/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getRole(id : string) {
    let url = `${this.BACKEND_API}/role/${id}`;
    return this.http.get<any>(url);
  }
  

  getRoleDropdownList() {
    let url = `${this.BACKEND_API}/role/dropdown`;
    return this.http.get<any>(url);
  }

  getRolePermissionList(id : string) {
    let url = `${this.BACKEND_API}/role_permission/${id}`;
    return this.http.get<any>(url);
  }

  updateRolePermissionList(id : string, data) {
    let url = `${this.BACKEND_API}/role_permission/${id}`;
    return this.http.post<any>(url, data);
  }
}
