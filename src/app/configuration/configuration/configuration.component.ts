import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'src/app/_services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  pageName : string = 'configuration'
  backUrl : string = '/configuration' ;

  objectData : any ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _configurationService : ConfigurationService,) {
    }

  ngOnInit() {
    this.getConfigurationDetail();
  }

  getConfigurationDetail(){

    this._configurationService.getConfiguration().subscribe(
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
