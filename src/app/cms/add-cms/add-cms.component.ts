import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CmsService } from '../../_services/cms.service';

@Component({
  selector: 'app-add-cms',
  templateUrl: './add-cms.component.html',
  styleUrls: ['./add-cms.component.css']
})
export class AddCmsComponent implements OnInit {

  pageName : string = 'cms'
  backUrl : string = '/cms' ;

  addForm: FormGroup;
  
  editId : string = null;
  isEditing : boolean = false;

  submitAttempt: boolean = false;
  formErrors: any[] = [];
  apiError: string = null;

  ckeditorContent: string = '<p>Some html</p>';

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService : AuthService,
    private _cmsService : CmsService,
  ) { 


    this.editId = this._route.snapshot.paramMap.get('id');
    if(this.editId){
      this.isEditing = true;
    }

    this.addForm = _formBuilder.group(
      {
        'cms_title': [null, Validators.compose([Validators.required])],
        'cms_content': [null, Validators.compose([Validators.required])],

      }
    );
  }

  ngOnInit() {

    if(this.isEditing){
      
      this.setEditData();
    }

  }


  setEditData(){
    this._cmsService.getCms(this.editId).subscribe(
      (response)=>{
        if(response.success){
          this.addForm.patchValue(
            {
              'cms_title': response.data.title,
              'cms_content' : response.data.content
            }
            );
        }
        else{
          this._router.navigate([this.backUrl]);
        }
      }
    );
  }

  submitForm():void{
    
    // console.log("\n ==> submitForm");

    this.submitAttempt = true;

    if(this.addForm.valid){

      this.apiError = '';

      const formData = {
        'title': this.addForm.value.cms_title,
        'content': this.addForm.value.cms_content
      }

      if(this.isEditing){

      this._cmsService.editCms(this.editId, formData).subscribe(
      
        (response)=>{
          
          this.submitAttempt = false;

          this.formErrors = [];

          if(response.success){

            this._router.navigate([this.backUrl]);

          }
          else{
    
            Object.keys(response.error).forEach(prop => {
              this.formErrors.push(response.error[prop]);
            });

            swal.fire('', this.formErrors.join('<br>'), 'error');

          }

        }
      );
      }

      else{
        this._cmsService.addCms(formData).subscribe(
         
          (response)=>{
            
            this.submitAttempt = false;
  
            this.formErrors = [];
  
            if(response.success){
  
              this._router.navigate([this.backUrl]);
  
            }
            else{
      
              Object.keys(response.error).forEach(prop => {
                this.formErrors.push(response.error[prop]);
              });
  
              swal.fire('', this.formErrors.join('<br>'), 'error');
  
            }
  
          }
        );
      }



    }


  }
}
