import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesmanService } from 'src/app/_services/salesman.service';
import { getTimestampFromDate, getDateFromTimestamp } from 'src/app/_shared/date-utils';
import { RoleService } from 'src/app/_services/role.service';


@Component({
  selector: 'app-add-salesman',
  templateUrl: './add-salesman.component.html',
  styleUrls: ['./add-salesman.component.css']
})
export class AddSalesmanComponent implements OnInit {

  pageName : string = 'salesman'
  backUrl : string = '/salesman' ;
  
  addForm: FormGroup;

  editId : string = null;
  isEditing : boolean = false;

  submitAttempt: boolean = false;
  formErrors: any[] = [];
  apiError: string = null;

  roleDropdown: Array<any> = [];

  fileData: File = null;
  previewUrl:string = 'assets/img/no_image.jpg';

  bsConfig = { 
    dateInputFormat: 'DD/MM/YYYY', 
    maxDate : new Date()
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _salesmanService : SalesmanService,
    private _roleService : RoleService
  ) {

    this.editId = this._route.snapshot.paramMap.get('id');
    if(this.editId){
      this.isEditing = true;
    }

    this.addForm = _formBuilder.group(
      {
        'first_name': [null, Validators.compose([Validators.required])],
        'last_name': [null, Validators.compose([Validators.required])],
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'phone_number': [null, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)])],
        'address': [null, Validators.compose([Validators.required])],
        'date_of_birth': [null, Validators.compose([Validators.required])],
        'role_id': [null, Validators.compose([Validators.required])],
      }
      
    );
   }

  ngOnInit() {
    
    this.initDropDowns();

    if(this.isEditing){
      
      this.setEditData();
    }
  }

  initDropDowns(){
    this._roleService.getRoleDropdownList().subscribe(
      (response)=>{
        this.roleDropdown = response.data;
      }
    );
  }

  setEditData(){
    this._salesmanService.getSalesman(this.editId).subscribe(
      (response)=>{
        if(response.success){

          this.addForm.patchValue(
            {
              'first_name': response.data.first_name,
              'last_name': response.data.last_name,
              'email': response.data.email,
              'phone_number': response.data.phone_number,
              'address': response.data.address,
              'date_of_birth':  getDateFromTimestamp(response.data.birth_date),
              'role_id': response.data.role_id,

            }
            );

            this.previewUrl = response.data.image_url;

        }
        else{
          this._router.navigate([this.backUrl]);
        }
      }
    );

  }


  onFileChangeEvent(file): void{
    this.fileData = file;
  }

  submitForm():void{
    
    this.submitAttempt = true;

    if(this.addForm.valid){

      this.apiError = '';

      let date_of_birth = getTimestampFromDate(this.addForm.value.date_of_birth);

      const addFormData = {
        'first_name': this.addForm.value.first_name,
        'last_name': this.addForm.value.last_name,
        'email': this.addForm.value.email,
        'phone_number': this.addForm.value.phone_number,
        'address': this.addForm.value.address,
        'date_of_birth': date_of_birth ,
        'role_id': this.addForm.value.role_id,

      }

      const formData = new FormData();
      
      if(this.fileData){
        formData.append('image', this.fileData);
      }

      Object.keys(addFormData).forEach(prop => {
        formData.append(prop, addFormData[prop]);
      });

      if(this.isEditing){

      this._salesmanService.editSalesman(this.editId, formData).subscribe(
      
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
        this._salesmanService.addSalesman(formData).subscribe(
         
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
