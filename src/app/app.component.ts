import { Component, OnInit } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app-fisher';
  spinnerStyle = Spinkit;

  public currentUser: any = null;

  constructor(private _titleService: Title,
    private _router: Router,
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute) {

    this._authService.currentUser.subscribe(x => this.currentUser = x);

  }



  ngOnInit() {

    // https://blog.bitsrc.io/dynamic-page-titles-in-angular-98ce20b5c334

    const appTitle = this._titleService.getTitle();
    this._router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this._activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
          return appTitle;
        })
      ).subscribe((ttl: string) => {
        this._titleService.setTitle(ttl);
      });
  }

}
