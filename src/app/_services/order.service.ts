import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

// https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getOrderList(q_params: object) {

    let url = `${this.BACKEND_API}/order`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addOrder(data) {
    let url = `${this.BACKEND_API}/order`;
    return this.http.post<any>(url, data);
  }


  editOrder(id : string, data) {
    let url = `${this.BACKEND_API}/order/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getOrder(id : string) {
    let url = `${this.BACKEND_API}/order/${id}`;
    return this.http.get<any>(url);
  }

}
