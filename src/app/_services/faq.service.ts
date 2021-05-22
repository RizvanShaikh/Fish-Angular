import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getFaqList(q_params: object) {

    let url = `${this.BACKEND_API}/faq`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addFaq(data) {
    let url = `${this.BACKEND_API}/faq`;
    return this.http.post<any>(url, data);
  }


  editFaq(id : string, data) {
    let url = `${this.BACKEND_API}/faq/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getFaq(id : string) {
    let url = `${this.BACKEND_API}/faq/${id}`;
    return this.http.get<any>(url);
  }
  
}
