import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  taskData : any = {};
  orderData : any = {};
  customorData : any = {};
  salesmanData : any = {};
  revenueData : any = {};

  constructor(private _dashboardService : DashboardService) 
    {

    }

  ngOnInit() {

    this.getDashboardData();
  }

  getDashboardData(){
    this._dashboardService.getDashboardData().subscribe(
      (response)=>{
        console.log("\n ==> response: ", response);

        this.taskData = response.data.task;
        this.orderData = response.data.order;
        this.customorData = response.data.customor;
        this.revenueData = response.data.revenue;
        this.salesmanData = response.data.salesman;

      },
      (error)=>{
        console.log("\n ==> error: ", error);
      }
    );
  }


}

