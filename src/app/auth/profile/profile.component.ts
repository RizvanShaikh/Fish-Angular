import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser : any = null;

  constructor(private _authService: AuthService,) { 
    this._authService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit() {


  }

}
