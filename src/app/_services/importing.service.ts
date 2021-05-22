import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

// https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/


@Injectable({
  providedIn: 'root'
})
export class ImportingService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getImportingList(q_params: object) {

    let url = `${this.BACKEND_API}/importing`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addImporting(data) {
    let url = `${this.BACKEND_API}/importing`;
    return this.http.post<any>(url, data);
  }


  editImporting(id : string, data) {
    let url = `${this.BACKEND_API}/importing/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getImporting(id : string) {
    let url = `${this.BACKEND_API}/importing/${id}`;
    return this.http.get<any>(url);
  }

}
