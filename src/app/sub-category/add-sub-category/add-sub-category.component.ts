import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SubCategoryService } from '../../_services/sub-category.service';
import { DropdownListService } from 'src/app/_services/dropdown-list.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  pageName : string = 'subcategory'
  backUrl : string = '/sub-category' ;

  addForm: FormGroup;
  
  editId : string = null;
  isEditing : boolean = false;

  submitAttempt: boolean = false;
  formErrors: any[] = [];
  apiError: string = null;

  categoryDropdown: Array<any> = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService : AuthService,
    private _subCategoryService : SubCategoryService,
    private _dropdownListService : DropdownListService,

  ) { 
    

    this.editId = this._route.snapshot.paramMap.get('id');
    if(this.editId){
      this.isEditing = true;
    }

    this.addForm = _formBuilder.group(
      {
        'subcategory_title': [null, Validators.compose([Validators.required])],
        'category_id': [null, Validators.compose([Validators.required])],
      }
    );
  }

  ngOnInit() {

    this.initDropdowns();
    
    if(this.isEditing){
      this.setEditData();
    }

  }

  initDropdowns(){

    this._dropdownListService.getCategoryDropdown().subscribe(
      (response)=>{
        if(response.success){
          this.categoryDropdown = response.data;
        }
      }
    );

  }

  setEditData(){
    this._subCategoryService.getSubCategory(this.editId).subscribe(
      (response)=>{
        if(response.success){
          this.addForm.patchValue(
            {
              'subcategory_title': response.data.title,
              'category_id': response.data.category_id

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
        'title': this.addForm.value.subcategory_title,
        'category_id': this.addForm.value.category_id,
      }

      if(this.isEditing){

      this._subCategoryService.editSubCategory(this.editId, formData).subscribe(
      
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
        this._subCategoryService.addSubCategory(formData).subscribe(
         
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
