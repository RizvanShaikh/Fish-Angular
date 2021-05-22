import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CmsService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getCmsList(q_params: object) {

    let url = `${this.BACKEND_API}/cms`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addCms(data) {
    let url = `${this.BACKEND_API}/cms`;
    return this.http.post<any>(url, data);
  }


  editCms(id : string, data) {
    let url = `${this.BACKEND_API}/cms/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getCms(id : string) {
    let url = `${this.BACKEND_API}/cms/${id}`;
    return this.http.get<any>(url);
  }
  
}
