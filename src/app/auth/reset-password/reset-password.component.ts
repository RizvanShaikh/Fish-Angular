import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validatePassword, PasswordValidation } from 'src/app/_form-validation/custom-validations';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token : string ;
  userId : string; 

  showResetPasswordForm : boolean = false;
  invalidToken : boolean = false;

  resetPassForm: FormGroup;

  formErrors: any[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService

  ) {

    this.resetPassForm = _formBuilder.group(
      {
        'password': [null, Validators.compose([Validators.required])],
        'confirm_password': [null, Validators.compose([Validators.required])],
      },
      {
        validators : PasswordValidation.passwordValidation('confirm_password')
      }
    );

   }

  ngOnInit() {

    this.token = this._route.snapshot.paramMap.get('token');
    console.log("this.token: ", this.token);
    this.tokenValidation();
 
  }


  tokenValidation(){
    this._authService.checkResetPasswordToken(this.token).subscribe(
      (response)=>{
        if(response.success){
          this.showResetPasswordForm = true;
          this.userId = response.data.user_id;
        }
        else{
          this.invalidToken = true; 
          console.log("response: ", response);
        }
      },
      (error)=>{
        console.log("==> error: ", error);
      }
    );

  }

  submitForm():void{
    
    console.log("\n ==> submitForm");

    if(this.resetPassForm.valid){

      this.formErrors = [];
      
      const formData = {
        'user_id': this.userId,
        'new_password': this.resetPassForm.value.password,
        'confirm_password': this.resetPassForm.value.confirm_password
      }

      this._authService.resetPassword(formData, this.token).subscribe(
        (response)=>{

          console.log("==> resetPassword response: ", response);
          if(response.success){

            this._toastr.success('Password updated sucsessfully');

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
      console.log("this.resetPassForm: ", this.resetPassForm)
      
    }

  }




}
