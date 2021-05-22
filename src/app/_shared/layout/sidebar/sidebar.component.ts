import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { constants } from 'src/app/_shared/constants';
import { AppPermissionService } from 'src/app/auth/services/app-permission.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  public appName : string = constants['app_name']||'App Name';
  public currentUser : any = null;

  public sideBarOption : Array<any> = []
  constructor(private _authService: AuthService,
    private _route: ActivatedRoute ,
    private _appPermissionService: AppPermissionService,
    private _router : Router) {
      this._authService.currentUser.subscribe(x => this.currentUser = x);
     }
  
  ngOnInit() {
    console.log("\n ==> SidebarComponent ngOnInit")
    this.setSideBarOption();
    
  }

  checkListPermission(model): boolean{
  
    return this._appPermissionService.checkPermission(model, 'list')
    
  }
  
  setSideBarOption(){

    if(true){
      this.sideBarOption.push(
        { 
          'title': 'Dashboard', 'routerLink': '/dashboard', 'icon_class': 'icon dripicons-meter'
        }
      )
    }

    if(this.checkListPermission('size')){
      this.sideBarOption.push(
        {
          'title': 'Size', 'routerLink': '/size', 'icon_class': 'zmdi zmdi-format-size zmdi-hc-fw'
        }
      )
    }

    if(this.checkListPermission('category')){
      this.sideBarOption.push(
        {
          'title': 'Category', 'routerLink': '/category', 'icon_class': 'zmdi zmdi-view-subtitles zmdi-hc-fw'
        }
      )
    }

    if(this.checkListPermission('subcategory')){
      this.sideBarOption.push(
        {
          'title': 'Sub Category', 'routerLink': '/sub-category', 'icon_class': 'zmdi zmdi-view-quilt zmdi-hc-fw'
        }
      )
    }

    if(this.checkListPermission('importing')){
      this.sideBarOption.push(
        {
          'title': 'Importing', 'routerLink': '/importing', 'icon_class': 'zmdi zmdi-format-valign-bottom zmdi-hc-fw'
        }
      )
    }

    if(this.checkListPermission('type')){
      this.sideBarOption.push(
        {
          'title': 'Type', 'routerLink': '/type', 'icon_class': 'icon dripicons-to-do'
        }
      )
    }

    if(this.checkListPermission('product')){
      this.sideBarOption.push(
        {
          'title': 'Product', 'routerLink': '/product', 'icon_class': 'icon dripicons-blog'
        }
      )
    }

    if(this.checkListPermission('customer')){
      this.sideBarOption.push(
        {
          'title': 'Customer', 'routerLink': '/customer', 'icon_class': 'zmdi zmdi-account-o zmdi-hc-fw'
        }
      )
    }

    if(this.checkListPermission('salesman')){
      this.sideBarOption.push(
        {
          'title': 'Salesman', 'routerLink': '/salesman', 'icon_class': 'zmdi zmdi-account-o zmdi-hc-fw'
        }
      )
    }

    if(this.checkListPermission('task')){
      this.sideBarOption.push(
        {
          'title': 'Task', 'routerLink': '/task', 'icon_class': 'la la-tasks'
        }
      )
    }

    if(this.checkListPermission('role')){
      this.sideBarOption.push(
        {
          'title': 'Role', 'routerLink': '/role', 'icon_class': 'la la-tasks'
        }
      )
    }

    if(this.checkListPermission('order')){
      this.sideBarOption.push(
        {
          'title': 'Order', 'routerLink': '/order', 'icon_class': 'la la-tasks'
        }
      )
    }



    if(this.checkListPermission('configuration')){
      this.sideBarOption.push(
        {
          'title': 'Configuration', 'routerLink': '/configuration', 'icon_class': 'la la-tasks'
        }
      )
    }



    if(this.checkListPermission('faq')){
      this.sideBarOption.push(
        {
          'title': 'FAQ', 'routerLink': '/faq', 'icon_class': 'la la-tasks'
        }
      )
    }



    if(this.checkListPermission('cms')){
      this.sideBarOption.push(
        {
          'title': 'CMS', 'routerLink': '/cms', 'icon_class': 'la la-tasks'
        }
      )
    }

    if(this.checkListPermission('site_image')){
      this.sideBarOption.push(
        {
          'title': 'Site Image', 'routerLink': '/site-image', 'icon_class': 'la la-tasks'
        }
      )
    }

  }


}
