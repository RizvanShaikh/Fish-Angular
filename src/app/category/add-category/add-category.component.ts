import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  pageName : string = 'category'
  backUrl : string = '/category' ;
  
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
    private _categoryService : CategoryService,
  ) {

    this.editId = this._route.snapshot.paramMap.get('id');
    if(this.editId){
      this.isEditing = true;
    }

    this.addForm = _formBuilder.group(
      {
        'category_title': [null, Validators.compose([Validators.required])],
      }
    );

   }

  ngOnInit() {
    if(this.isEditing){
      
      this.setEditData();
    }
  }


  setEditData(){
    this._categoryService.getCategory(this.editId).subscribe(
      (response)=>{
        if(response.success){
          this.addForm.patchValue(
            {
              'category_title': response.data.title
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
        'title': this.addForm.value.category_title,
      }

      if(this.isEditing){

      this._categoryService.editCategory(this.editId, formData).subscribe(
      
        (response)=>{
          
          this.submitAttempt = false;

          this.formErrors = [];

          if(response.success){

            this._router.navigate(['/category']);

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
        this._categoryService.addCategory(formData).subscribe(
         
          (response)=>{
            
            this.submitAttempt = false;
  
            this.formErrors = [];
  
            if(response.success){
  
              this._router.navigate(['/category']);
  
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
