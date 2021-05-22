import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { TokenInterceptor } from './_interceptors/token.interceptor';
import { ErrorHandlerInterceptor } from './_interceptors/error-handler.interceptor' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormValidationModule } from './_form-validation/form-validation.module';
import { HomeComponent } from './home/home.component';
// import { SidebarComponent } from './_shared/layout/sidebar/sidebar.component';
// import { TopToolbarComponent } from './_shared/layout/top-toolbar/top-toolbar.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from './_shared/components';
import { CKEditorModule } from 'ng2-ckeditor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // SidebarComponent,
    // TopToolbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgHttpLoaderModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidationModule,
    BsDatepickerModule.forRoot(),
    SharedModule,
    CKEditorModule


  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
