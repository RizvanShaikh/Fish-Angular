import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppTokenService {

  constructor() { }

  saveToken(tokenKey:string):void{
    localStorage.setItem('_app_token', tokenKey);
  }

  getToken():string {
    return  localStorage.getItem('_app_token');
  }

  deleteToken():void{
    window.localStorage.removeItem('_app_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('_app_token') !==  null;
  }


}
