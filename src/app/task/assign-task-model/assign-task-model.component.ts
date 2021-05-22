import swal from 'sweetalert2';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getTimestampFromDate } from 'src/app/_shared/date-utils';
import { DropdownListService } from 'src/app/_services/dropdown-list.service';
import { TaskService } from 'src/app/_services/task.service';

@Component({
  selector: 'app-assign-task-model',
  templateUrl: './assign-task-model.component.html',
  styleUrls: ['./assign-task-model.component.css']
})
export class AssignTaskModelComponent implements OnInit {

  @Input() taskObj = null;
  @Output() closeModelEvent = new EventEmitter();

  addForm: FormGroup;

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
    private _taskService : TaskService,
    private _dropdownService : DropdownListService

  ) { 

    this.addForm = _formBuilder.group(
      {
        'assignee_id': [null, Validators.compose([Validators.required])],
        'issue_date': [null, Validators.compose([Validators.required])],
        'due_date': [null, Validators.compose([Validators.required])],
      });
  }

  ngOnInit() {
    // TODO open model

    this.initDropdowns();
    

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



  closeModel(){
    // TODO model close
    this.closeModelEvent.emit();
  }



  submitForm():void{
    
    console.log("\n ==> submitForm");
    console.log("\n ==> this.addForm", this.addForm);

    this.submitAttempt = true;

    if(this.addForm.valid){

      this.apiError = '';

      const formData = {
        'task': this.taskObj.task,
        'assignee_id': this.addForm.value.assignee_id,
        'issue_date':   getTimestampFromDate(this.addForm.value.issue_date) ,
        'due_date': getTimestampFromDate(this.addForm.value.due_date),

      }


      this._taskService.editTask(this.taskObj.id, formData).subscribe(
      
        (response)=>{
          
          this.submitAttempt = false;

          this.formErrors = [];

          if(response.success){

            this.closeModel();

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
