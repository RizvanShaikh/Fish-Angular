import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppTokenService } from './app-token.service';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  private currentPermissionSubject: BehaviorSubject<any>;
  public currentPermission: Observable<any>;


  private BACKEND_API = environment.BACKEND_API;

  constructor(
    private http: HttpClient,
    private _appToken: AppTokenService
    ) {

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.currentPermissionSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentPermission')));
    this.currentPermission = this.currentPermissionSubject.asObservable();
  }

  // APIs

  public userLogin(data): Observable<any> {

    let url = `${this.BACKEND_API}/auth/login`;
    return this.http.post(url, data);

  }

  public userLogout(data): Observable<any> {

    let url = `${this.BACKEND_API}/auth/logout`;
    return this.http.post(url, data);

  }

  public forgotPassword(data): Observable<any> {

    let url = `${this.BACKEND_API}/auth/forgot_password`;
    return this.http.post(url, data);

  }

  public checkResetPasswordToken(token): Observable<any> {

    let url = `${this.BACKEND_API}/auth/${token}/reset_password`;
    return this.http.get(url);

  }

  public resetPassword(data, token): Observable<any> {

    let url = `${this.BACKEND_API}/auth/${token}/reset_password`;
    return this.http.post(url, data);

  }

  public changePassword(data): Observable<any> {

    let url = `${this.BACKEND_API}/auth/change_password`;
    return this.http.post(url, data);

  }

  public updateProfile(data): Observable<any> {

    let url = `${this.BACKEND_API}/profile`;
    return this.http.post(url, data);

  }

  // Class methods

  public isAuthenticated(): boolean {
    const token = this._appToken.getToken();
    if (token) {
      return true;
    }
    return false;
  }



  public setAuthDetail(loginData): void {

    const TokenDetail = loginData.Token ? loginData.Token : [];
    const UserDetail = loginData.User ? loginData.User : [];
    const PermissionDetail = loginData.Permission ? loginData.Permission : [];

    this._appToken.saveToken(TokenDetail.token);
    this.saveCurrentUser(UserDetail);
    this.savePermission(PermissionDetail);

  }

  public onUserLogout(): void {
    this.removeAuthDetail();
  }


  public removeAuthDetail(): void {

    this._appToken.deleteToken();
    this.removeCurrentUser();
    this.removePermission();
  }

  // currentUserSubject functions
  public saveCurrentUser(UserDetail): void {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(UserDetail));
    this.currentUserSubject.next(UserDetail);
    console.log("\n==> saveCurrentUser: ")
  }


  public removeCurrentUser(): void {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  //  currentPermissionSubject functions

  public savePermission(PermissionDetail): void {
    // store permissions tp local

    localStorage.setItem('currentPermission', JSON.stringify(PermissionDetail));
    this.currentPermissionSubject.next(PermissionDetail);
  }

  public removePermission(): void {
    // remove permissions from local storage and set current permission to null
    localStorage.removeItem('currentPermission');
    this.currentPermissionSubject.next(null);

  }

  public get currentPermissionValue() {
    return this.currentPermissionSubject.value;
  }

}
