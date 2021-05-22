import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DropdownListService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getImportingDropdown() {
    let url = `${this.BACKEND_API}/importing/dropdown`;
    return this.http.get<any>(url);
  }

  getSizeDropdown() {
    let url = `${this.BACKEND_API}/size/dropdown`;
    return this.http.get<any>(url);
  }

  getCategoryDropdown() {
    let url = `${this.BACKEND_API}/category/dropdown`;
    return this.http.get<any>(url);
  }

  getTypeDropdown() {
    let url = `${this.BACKEND_API}/type/dropdown`;
    return this.http.get<any>(url);
  }

  getSubCategoryDropdown() {
    let url = `${this.BACKEND_API}/sub-category/dropdown`;
    return this.http.get<any>(url);
  }

  getSalesmanDropdown() {
    let url = `${this.BACKEND_API}/salesman/dropdown`;
    return this.http.get<any>(url);
  }


}
