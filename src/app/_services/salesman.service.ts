import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getSalesmanList(q_params: object) {

    let url = `${this.BACKEND_API}/salesman`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addSalesman(data) {
    let url = `${this.BACKEND_API}/salesman`;
    return this.http.post<any>(url, data);
  }


  editSalesman(id : string, data) {
    let url = `${this.BACKEND_API}/salesman/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getSalesman(id : string) {
    let url = `${this.BACKEND_API}/salesman/${id}`;
    return this.http.get<any>(url);
  }

}
