import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopToolbarComponent } from './layout/top-toolbar/top-toolbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    SidebarComponent, 
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent, 
    TopToolbarComponent, 
    LoaderComponent, 
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],

  exports: [
    LoaderComponent,
    TopToolbarComponent,
    SidebarComponent, 

  ]
})
export class SharedModule { }
