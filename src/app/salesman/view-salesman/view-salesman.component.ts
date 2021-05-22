import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesmanService } from 'src/app/_services/salesman.service';

@Component({
  selector: 'app-view-salesman',
  templateUrl: './view-salesman.component.html',
  styleUrls: ['./view-salesman.component.css']
})
export class ViewSalesmanComponent implements OnInit {
  pageName : string = 'salesman'
  backUrl : string = '/salesman' ;

  viewId : string = null;

  objectData : any ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _salesmanService : SalesmanService,) 
    {
      this.viewId = this._route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.getObjectViewDetail();
  }

  getObjectViewDetail(){

    this._salesmanService.getSalesman(this.viewId).subscribe(
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
