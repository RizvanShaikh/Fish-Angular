import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPagination } from 'src/app/_shared/interfaces/pagination';
import { ProductService } from 'src/app/_services/product.service';
import { IProduct } from 'src/app/_shared/interfaces/product';
import { AppPermissionService } from 'src/app/auth/services/app-permission.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  pageName = 'product'
  changeStatusUrl : string = 'product'
  deleteUrl : string = 'product' ;

  objectList : Array<IProduct> = [];
  pagination : IPagination ;

  params : object = {} ;
  currentPage : number = 1 ;
  size : number = 10 ;
  search : String = null; 

    // permissions
    canAdd : boolean = false;
    canView : boolean = false;
    canEdit : boolean = false;
    canDelete : boolean = false;
    canChangeStatus : boolean = false;
  
    modelPemissionList : Array<string> = [];

  constructor(
    private _router: Router,
    private _appPermissionService: AppPermissionService,
    private _productService: ProductService
  ) {
    this.setPermissions();
   }

  ngOnInit() {

    this.getObjectList();
  }

  setPermissions(): void {
    let model = 'product'
    this.modelPemissionList = this._appPermissionService.getModelPermissionList(model)
    this.canAdd  = this.modelPemissionList.includes('add') ? true : false;
    this.canView  = this.modelPemissionList.includes('view') ? true : false;
    this.canEdit  = this.modelPemissionList.includes('edit') ? true : false;
    this.canDelete  = this.modelPemissionList.includes('delete') ? true : false;
    this.canChangeStatus  = this.modelPemissionList.includes('change_status') ? true : false;
   }

  getObjectList(){
    
    this.updateParams();

    if(this.params){
      this._router.navigate([], { queryParams: this.params });
    }

    this._productService.getProductList(this.params).subscribe(
      (response)=>{

        if(response.success){
          this.objectList = response.data.data;
          this.pagination = response.data.pagination;
          this.currentPage = this.pagination.current_page; 
          this.size = this.pagination.size; 

        }
      },

      (error) => {
    
        this.objectList = [];
        this.pagination = null;
        this.currentPage = 1;
        this.size = 10; 

      }

    );
  }

  updateParams(){
    this.params = {}
    if(this.currentPage){
      this.params['page'] = this.currentPage
    }
    if(this.search){
      this.params['search'] = this.search
    }
  }

  getPage(pageNo){
    this.currentPage = pageNo;
    this.getObjectList();
  }

  getSearch(q){
    this.search = q ;
    this.currentPage = 1;
    this.getObjectList();
  }


  changeFavoriteStatus(obj){
    const data = {'is_favorite':!obj.is_favorite}
    this._productService.productFavorite(obj.id, data).subscribe((response)=>{
      // console.log("response: ", response)
      if(response.success){
        obj.is_favorite = !obj.is_favorite;
      }
    });
  }

}
