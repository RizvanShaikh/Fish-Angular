import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FaqService } from '../../_services/faq.service';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.css']
})
export class AddFaqComponent implements OnInit {

  pageName : string = 'faq'
  backUrl : string = '/faq' ;

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
    private _faqService : FaqService,
  ) { 


    this.editId = this._route.snapshot.paramMap.get('id');
    if(this.editId){
      this.isEditing = true;
    }

    this.addForm = _formBuilder.group(
      {
        'faq_question': [null, Validators.compose([Validators.required])],
        'faq_answer': [null, Validators.compose([Validators.required])],

      }
    );
  }

  ngOnInit() {

    if(this.isEditing){
      
      this.setEditData();
    }

  }


  setEditData(){
    this._faqService.getFaq(this.editId).subscribe(
      (response)=>{
        if(response.success){
          this.addForm.patchValue(
            {
              'faq_question': response.data.question,
              'faq_answer' : response.data.answer
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
        'question': this.addForm.value.faq_question,
        'answer': this.addForm.value.faq_answer
      }

      if(this.isEditing){

      this._faqService.editFaq(this.editId, formData).subscribe(
      
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
        this._faqService.addFaq(formData).subscribe(
         
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
