import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ConfigurationService } from '../../_services/configuration.service';
import { DropdownListService } from 'src/app/_services/dropdown-list.service';

@Component({
  selector: 'app-update-configuration',
  templateUrl: './update-configuration.component.html',
  styleUrls: ['./update-configuration.component.css']
})
export class UpdateConfigurationComponent implements OnInit {

  pageName: string = 'configuration'
  backUrl: string = '/configuration';

  addForm: FormGroup;

  submitAttempt: boolean = false;
  formErrors: any[] = [];
  apiError: string = null;

  currencyDropdown: Array<any> = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _configurationService: ConfigurationService,
    private _dropdownListService: DropdownListService,

  ) {

    this.addForm = _formBuilder.group(
      {
        'app_name': [null, Validators.compose([Validators.required])],
        'currency': [null, Validators.compose([Validators.required])],
        'contact_no': [null, Validators.compose([Validators.required])],
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'address': [null],
        'timing': [null],
        'facebook_link': [null],
        'twitter_link': [null],
        'youtube_link': [null],
        'linked_in_link': [null],
      }
    );
  }

  ngOnInit() {

    this.initDropdowns();
    this.getConfigurationDetail();

  }


  getConfigurationDetail(){

    this._configurationService.getConfiguration().subscribe(
    (response)=>{
      if(response.success){
          let objectData = {} 
          response.data.forEach(element => {
            objectData[element.code] = element.value
          });
          console.log("objectData: ", objectData);

          this.addForm.patchValue(objectData);
      }

    }
    );

  }
  initDropdowns() {
    this.currencyDropdown = [
      { 'label': '$', 'value': '$' },
      { 'label': '₹', 'value': '₹' },
    ]

  }

  submitForm(): void {

    console.log("\n ==> submitForm");
    console.log("\n ==> this.addForm: ", this.addForm);

    this.submitAttempt = true;

    if (this.addForm.valid) {

      this.apiError = '';

      let formData = [];
      Object.keys(this.addForm.value).forEach(prop => {
        formData.push(
          {
            'name': prop,
            'code': prop,
            'value': this.addForm.value[prop],
          }
        );
      });


      this._configurationService.updateConfiguration(formData).subscribe(

        (response) => {

          this.submitAttempt = false;

          this.formErrors = [];

          if (response.success) {

            this._router.navigate([this.backUrl]);

          }
          else {

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
