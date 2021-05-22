import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PasswordValidation, MustMatch } from 'src/app/_form-validation/custom-validations';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  resetPassForm: FormGroup;

  submitAttempt: boolean = false;

  formErrors : Array<any> = [];
  apiError : string = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService
  ) { 
    this.resetPassForm = _formBuilder.group(
      {
        'old_password': [null, Validators.compose([Validators.required])],
        'password': [null, Validators.compose([Validators.required])],
        'confirm_password': [null, Validators.compose([Validators.required])],

      },
      {
        validators : PasswordValidation.passwordValidation('confirm_password'),
        // validator: MustMatch('password', 'confirm_password')

      }
    );

  }

  ngOnInit() {
  }


  submitForm():void{
    
    console.log("\n ==> submitForm");

    this.submitAttempt = true;

    if(this.resetPassForm.valid){

      this.apiError = '';
      
      const formData = {
        'old_password': this.resetPassForm.value.old_password,
        'new_password': this.resetPassForm.value.password,
        'confirm_password': this.resetPassForm.value.confirm_password
      }

      this._authService.changePassword(formData).subscribe(
        (response)=>{
         
          this.formErrors = [];

          console.log("==> changePassword response: ", response);
          if(response.success){

            this._toastr.success('Profile updated sucsessfully');

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
