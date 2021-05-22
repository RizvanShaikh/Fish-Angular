import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getConfiguration() {

    let url = `${this.BACKEND_API}/configuration`;

    let params = new HttpParams()       
    return this.http.get<any>(url, {params});
  }

  updateConfiguration(data) {
    let url = `${this.BACKEND_API}/configuration`;
    return this.http.post<any>(url, data);
  }


}
