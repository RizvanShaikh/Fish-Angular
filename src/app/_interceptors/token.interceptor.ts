import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppTokenService } from '../auth/services/app-token.service';

// REF : https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AppTokenService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token  = this.auth.getToken();

    if(token){
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${token}`
        }
      });
    }

    return next.handle(request);
  }
}