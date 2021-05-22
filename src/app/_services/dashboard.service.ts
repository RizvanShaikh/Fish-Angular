import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getDashboardData() {
    let url = `${this.BACKEND_API}/dashboard`;
    return this.http.get<any>(url);
  }

}
