import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getSubCategoryList(q_params: object) {

    let url = `${this.BACKEND_API}/sub-category`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addSubCategory(data) {
    let url = `${this.BACKEND_API}/sub-category`;
    return this.http.post<any>(url, data);
  }


  editSubCategory(id : string, data) {
    let url = `${this.BACKEND_API}/sub-category/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getSubCategory(id : string) {
    let url = `${this.BACKEND_API}/sub-category/${id}`;
    return this.http.get<any>(url);
  }

}
