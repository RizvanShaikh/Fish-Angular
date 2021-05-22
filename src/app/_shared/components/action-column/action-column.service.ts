import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActionColumnService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  changeStatus(statusUrl: string, id: number, data) {  
    let url = `${this.BACKEND_API}/${statusUrl}/${id}`;
    return this.http.patch<any>(url, data);
  }

  deleteObj(deleteUrl: string, id:number) {  
    let url = `${this.BACKEND_API}/${deleteUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
