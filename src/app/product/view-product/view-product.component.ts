import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  pageName : string = 'product'
  backUrl : string = '/product' ;

  viewId : string = null;

  objectData : any ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService : ProductService,) 
    {
      this.viewId = this._route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.getObjectViewDetail();
  }

  getObjectViewDetail(){

    this._productService.getProduct(this.viewId).subscribe(
    (response)=>{
      if(response.success){
          this.objectData = response.data;

          console.log("this.objectData: ",this.objectData)
      }
      else{
        this._router.navigate([this.backUrl]);
      }
    }
    );

  }

}
