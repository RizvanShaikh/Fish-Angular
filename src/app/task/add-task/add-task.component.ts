import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/_services/task.service';
import { DropdownListService } from 'src/app/_services/dropdown-list.service';
import { getTimestampFromDate, getDateFromTimestamp } from 'src/app/_shared/date-utils';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  pageName : string = 'task'
  backUrl : string = '/task' ;
  
  addForm: FormGroup;

  editId : string = null;
  isEditing : boolean = false;

  submitAttempt: boolean = false;
  formErrors: any[] = [];
  apiError: string = null;

  salesmanDropdown: Array<any> = [];

  bsConfig = { 
    dateInputFormat: 'DD/MM/YYYY', 
    // maxDate : new Date()
  }

  iMinDate = new Date();
  dMinDate = new Date();

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _taskService : TaskService,
    private _dropdownService : DropdownListService

  ) {

    this.editId = this._route.snapshot.paramMap.get('id');
    if(this.editId){
      this.isEditing = true;
    }

    this.addForm = _formBuilder.group(
      {
        'task': [null, Validators.compose([Validators.required])],
        'assignee_id': [null],
        'issue_date': [null],
        'due_date': [null],
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

    this._dropdownService.getSalesmanDropdown().subscribe(
      (response)=>{
        if(response.success){
          this.salesmanDropdown = response.data;
        }
      }
    );

  }

  setEditData(){
    this._taskService.getTask(this.editId).subscribe(
      (response)=>{
        if(response.success){
          this.addForm.patchValue(
            {
              'task': response.data.task,
              'assignee_id': response.data.assignee_id,
              'issue_date': getDateFromTimestamp(response.data.issue_date_timestamp),
              'due_date':  getDateFromTimestamp(response.data.due_date_timestamp),

            }
            );

            this.onSalesmanChange();
        }
        else{
          this._router.navigate([this.backUrl]);
        }
      }
    );

  }

  onSalesmanChange(){
    console.log("\n ==> onSalesmanChange: ")
    console.log()
    if(this.addForm.value.assignee_id){

      this.addForm.controls.issue_date.setValidators([Validators.required]);
      this.addForm.controls.due_date.setValidators([Validators.required]);

    }
    else{

      this.addForm.controls.issue_date.setValidators(null);
      this.addForm.controls.due_date.setValidators(null);

    }

    this.addForm.controls.issue_date.updateValueAndValidity();
    this.addForm.controls.due_date.updateValueAndValidity();

  }

  submitForm():void{
    
    console.log("\n ==> submitForm");
    console.log("\n ==> this.addForm", this.addForm);

    this.submitAttempt = true;

    if(this.addForm.valid){

      this.apiError = '';

      const formData = {
        'task': this.addForm.value.task,
        'assignee_id': this.addForm.value.assignee_id,
        'issue_date':   getTimestampFromDate(this.addForm.value.issue_date) ,
        'due_date': getTimestampFromDate(this.addForm.value.due_date),

      }


      if(this.isEditing){

      this._taskService.editTask(this.editId, formData).subscribe(
      
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
        this._taskService.addTask(formData).subscribe(
         
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
