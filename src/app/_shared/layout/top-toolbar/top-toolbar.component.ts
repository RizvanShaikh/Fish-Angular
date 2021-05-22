import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { constants } from 'src/app/_shared/constants';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {

  public currentUser : any = null;

  showTopBar : boolean = false;
  appName : string = constants['app_name']
  
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { 

  }

  ngOnInit() {

    this._authService.currentUser.subscribe(x => this.currentUser = x);

  }

  onLogout(){
    this._authService.removeAuthDetail();
    this._router.navigate(['/auth/login']);
  }
}
