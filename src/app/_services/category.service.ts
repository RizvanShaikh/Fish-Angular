import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

// https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getCategoryList(q_params: object) {

    let url = `${this.BACKEND_API}/category`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addCategory(data) {
    let url = `${this.BACKEND_API}/category`;
    return this.http.post<any>(url, data);
  }


  editCategory(id : string, data) {
    let url = `${this.BACKEND_API}/category/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getCategory(id : string) {
    let url = `${this.BACKEND_API}/category/${id}`;
    return this.http.get<any>(url);
  }

}
