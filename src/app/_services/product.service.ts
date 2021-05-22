import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BACKEND_API = environment.BACKEND_API;

  constructor(private http: HttpClient) { }

  getProductList(q_params: object) {

    let url = `${this.BACKEND_API}/product`;

    let params = new HttpParams()

    if(q_params){
      Object.keys(q_params).forEach(prop => {
        params=params.set(prop, String(q_params[prop]))
      });
    }
       
    return this.http.get<any>(url, {params});
  }


  addProduct(data) {
    let url = `${this.BACKEND_API}/product`;
    return this.http.post<any>(url, data);
  }


  editProduct(id : string, data) {
    let url = `${this.BACKEND_API}/product/${id}`;
    return this.http.put<any>(url, data);
  }

  
  getProduct(id : string) {
    let url = `${this.BACKEND_API}/product/${id}`;
    return this.http.get<any>(url);
  }

  productFavorite(id, data) {
    let url = `${this.BACKEND_API}/product/${id}/favorite`;
    return this.http.post<any>(url, data);
  }

  productFormDropdownList() {
    let url = `${this.BACKEND_API}/product/form_dropdowm_list`;
    return this.http.get<any>(url);
  }

}
