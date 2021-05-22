import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  loginForm: FormGroup;

  submitAttempt: boolean = false;

  formErrors: any[] = [];
  apiError: string = null;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _toastr: ToastrService,
    private _authService : AuthService
  ) { 
    this.loginForm = _formBuilder.group(
      {
        'email': [null, Validators.compose([Validators.required, Validators.email])],
      }
    );
  }

  ngOnInit() {
  }

  submitForm():void{
    
    console.log("\n ==> submitForm");

    this.submitAttempt = true;

    if(this.loginForm.valid){

      this.apiError = '';

      const formData = {
        'email': this.loginForm.value.email,
      }

      this._authService.forgotPassword(formData).subscribe(
        (response)=>{
          this.formErrors = [];

          console.log("response: ", response)
          if(response.success){

            this._toastr.success('Email sent sucsessfully');

            this._router.navigate(['/auth/login']);

          }
          else{
            
            Object.keys(response.error).forEach(prop => {
              this.formErrors.push(response.error[prop])
            });

            swal.fire('', this.formErrors.join('<br>'), 'error');


          }

        }
      );


    }
    else{
      console.log("\n ==> formData not Valid X ");
      
    }

  }
}
