import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  returnUrl: string;

  loginForm: FormGroup;

  formErrors: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService) {

    this.loginForm = _formBuilder.group(
      {
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'password': [null, Validators.compose([Validators.required])],
      }
    );
    

    // redirect to home if already logged in
    if (this._authService.currentUserValue) {
      this._router.navigate(['/']);
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get formField() { return this.loginForm.controls; }

  submitForm(): void {
      debugger
    console.log("\n ==> submitForm");

    console.log("\n ==> this.loginForm: ", this.loginForm);

    if (this.loginForm.valid) {

      const formData = {
        'email': this.loginForm.value.email,
        'password': this.loginForm.value.password
      }

      this._authService.userLogin(formData).subscribe(
        (response) => {

          this.formErrors = [];

          console.log("==> userLogin response: ", response);

          if (response.success) {

            this._authService.setAuthDetail(response.data)
            this._router.navigate(['/dashboard']);

          }
          else {
  
            Object.keys(response.error).forEach(prop => {
              this.formErrors.push(response.error[prop])
            });

            swal.fire('', this.formErrors.join('<br>'), 'error');

          }
        }
      );
    }
     else {
      console.log("\n ==> formData not Valid X ");
    }
  }
}
