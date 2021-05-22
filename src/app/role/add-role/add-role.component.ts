import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RoleService } from '../../_services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
})
export class AddRoleComponent implements OnInit {

	pageName : string = 'role'
	backUrl : string = '/role' ;
  
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
	  private _authService : AuthService,
	  private _roleService : RoleService,
	) { 
  
  
	  this.editId = this._route.snapshot.paramMap.get('id');
	  if(this.editId){
		this.isEditing = true;
	  }
  
	  this.addForm = _formBuilder.group(
		{
		  'name': [null, Validators.compose([Validators.required])],
		}
	  );
	}
  
	ngOnInit() {
  
	  if(this.isEditing){
		
		this.setEditData();
	  }
  
	}
  
  
	setEditData(){
	  this._roleService.getRole(this.editId).subscribe(
		(response)=>{
		  if(response.success){
			this.addForm.patchValue(
			  {
				'name': response.data.name
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
		  'name': this.addForm.value.name,
		}
  
		if(this.isEditing){
  
		this._roleService.editRole(this.editId, formData).subscribe(
		
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
		  this._roleService.addRole(formData).subscribe(
		   
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
  