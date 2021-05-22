import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  profileForm: FormGroup;

  formErrors: any[] = [];
  
  fileData: File = null;
  previewUrl:any = null;

  public currentUser : any = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService
  ) { 

    this._authService.currentUser.subscribe(x => this.currentUser = x);

    this.profileForm = _formBuilder.group(
      {
        'image': [null],
        'first_name': [null, Validators.compose([Validators.required])],
        'last_name': [null, Validators.compose([Validators.required])],
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'dial_code': ['+91'],
        'phone_number': [null],
      }
    );
    
  }

  ngOnInit() {

    this.profileForm.patchValue({
      'first_name': this.currentUser.first_name,
      'last_name': this.currentUser.last_name,
      'email': this.currentUser.email,
      'dial_code': this.currentUser.dial_code ? this.currentUser.dial_code : '+91',
      'phone_number': this.currentUser.phone_number

    });

    this.previewUrl = this.currentUser.image ? this.currentUser.image : '/assets/img/avatars/user.png';
  }


  onFileChangeEvent(file){
    this.fileData = file
  }

  submitForm():void{
    
    console.log("\n ==> submitForm");
    console.log("\n ==> this.fileData: ", this.fileData)

    if(this.profileForm.valid){
    
      const profileFormData = {
        'first_name': this.profileForm.value.first_name,
        'last_name': this.profileForm.value.last_name,
        'email': this.profileForm.value.email,
        'dial_code': this.profileForm.value.dial_code?this.profileForm.value.dial_code:'+91',
        'phone_number': this.profileForm.value.phone_number?this.profileForm.value.phone_number: '',
      }

      const formData = new FormData();
      
      if(this.fileData){
        formData.append('image', this.fileData);
      }

      Object.keys(profileFormData).forEach(prop => {
        formData.append(prop, profileFormData[prop]);
      });

      this._authService.updateProfile(formData).subscribe(

        (response)=>{

          console.log("==> updateProfile response: ", response);
          if(response.success){

            this._authService.saveCurrentUser(response.data);

            this._toastr.success('Profile updated sucsessfully');

            this._router.navigate(['/auth/profile']);

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
