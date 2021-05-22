import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ImportingService } from 'src/app/_services/importing.service';

@Component({
  selector: 'app-add-importing',
  templateUrl: './add-importing.component.html',
  styleUrls: ['./add-importing.component.css']
})
export class AddImportingComponent implements OnInit {

  pageName : string = 'importing'
  backUrl : string = '/importing' ;
  
  addForm: FormGroup;

  editId : string = null;
  isEditing : boolean = false;

  submitAttempt: boolean = false;
  formErrors: any[] = [];
  apiError: string = null;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _importingService : ImportingService,
  ) {

    this.editId = this._route.snapshot.paramMap.get('id');
    if(this.editId){
      this.isEditing = true;
    }

    this.addForm = _formBuilder.group(
      {
        'importing_title': [null, Validators.compose([Validators.required])],
      }
    );

   }

  ngOnInit() {
    if(this.isEditing){
      
      this.setEditData();
    }
  }


  setEditData(){
    this._importingService.getImporting(this.editId).subscribe(
      (response)=>{
        if(response.success){
          this.addForm.patchValue(
            {
              'importing_title': response.data.title
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
        'title': this.addForm.value.importing_title,
      }

      if(this.isEditing){

      this._importingService.editImporting(this.editId, formData).subscribe(
      
        (response)=>{
          
          this.submitAttempt = false;

          this.formErrors = [];

          if(response.success){

            this._router.navigate([this.backUrl]);

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
        this._importingService.addImporting(formData).subscribe(
         
          (response)=>{
            
            this.submitAttempt = false;
  
            this.formErrors = [];
  
            if(response.success){
  
              this._router.navigate([this.backUrl]);
  
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



    }


  }


}
