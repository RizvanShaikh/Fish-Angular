import { FormControl, AbstractControl, FormGroup } from '@angular/forms';

// tslint:disable:one-line
export function validateEmail(c: FormControl) {
  // tslint:disable:max-line-length
  // tslint:disable:prefer-const
  let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (c.value) {
    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
  return null;
}


export function validatePassword(c: FormControl) {
  let PSWD_REGEXP = /(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}/;
  if (c.value) {
    return PSWD_REGEXP.test(c.value) ? null : {
      invalidPassword: {
        valid: false
      }
    };
  }
  return null;
}


export class PasswordValidation {
  static passwordValidation(checked) {
    return (AC: AbstractControl) => {
      let password = AC.get('password').value;
      let confirmpassword = AC.get('confirm_password').value;
      if (confirmpassword) {
        if (password !== confirmpassword) {
          return AC.get('confirm_password').setErrors({ validatePassword: true });
        }
        else {
          return null;
        }
      } else {
        return null;
      }
    };
  }
}


export function validateWhiteSpace(control: FormControl) {
  if (control.value) {
    var data_string = String(control.value)
    // console.log("data_string==>",data_string)
    // console.log((data_string || '').trim().length);
    let REGEXP = /\s/g;
    return !REGEXP.test(data_string) ? null : {
      whiteSpace: {
        valid: false
      }
    };
  }
  return null;
}


export function validatePhoneNumber(control: FormControl) {
  if (control.value) {
    var data_string = String(control.value)
    // console.log("data_string==>",data_string)
    // console.log((data_string || '').trim().length);
    let REGEXP = /[0-9]/;
    return REGEXP.test(data_string) ? null : {
      validatePhoneNumber: {
        valid: false
      }
    };
  }
  return null;
}


// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}