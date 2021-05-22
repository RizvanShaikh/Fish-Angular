import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SiteImageService } from '../../_services/site-image.service';

@Component({
	selector: 'app-add-site-image',
	templateUrl: './add-site-image.component.html',
	styleUrls: ['./add-site-image.component.css']
})

export class AddSiteImageComponent implements OnInit {

	pageName: string = 'site-image'
	backUrl: string = '/site-image';

	addForm: FormGroup;

	editId: string = null;
	isEditing: boolean = false;

	submitAttempt: boolean = false;
	formErrors: any[] = [];
	apiError: string = null;

	fileData: File = null;
	previewUrl:any = null;

	imageTypeDropdown : any[] = [];

	
	constructor(
		private _formBuilder: FormBuilder,
		private _route: ActivatedRoute,
		private _router: Router,
		private _authService: AuthService,
		private _siteImageService: SiteImageService,
	) {


		this.editId = this._route.snapshot.paramMap.get('id');
		if (this.editId) {
			this.isEditing = true;
		}

		this.addForm = _formBuilder.group(
			{
				'image': [null],
				'title': [null, Validators.compose([Validators.required])],
				'image_type': [null, Validators.compose([Validators.required])],
				'image_key': [null, Validators.compose([Validators.required])],
				'description': [null],
			}
		);
	}

	ngOnInit() {
		this.initDropdowns();
		if (this.isEditing) {

			this.setEditData();
		}

	}

	initDropdowns() {
		this.imageTypeDropdown = [
		  { 'label': 'banner', 'value': 'banner', 'message': 'banner image' },
		  { 'label': 'logo', 'value': 'logo' , 'message': 'logo image'},
		]
	
	  }

	setEditData() {
		this._siteImageService.getSiteImage(this.editId).subscribe(
			(response) => {
				if (response.success) {
					this.addForm.patchValue(
						{
							'title': response.data.title,
							'image_type': response.data.image_type,
							'image_key': response.data.image_key,
							'description': response.data.description,
						}
					);

					this.previewUrl = response.data.image_url ? response.data.image_url : '/assets/img/avatars/user.png';

				}
				else {
					this._router.navigate([this.backUrl]);
				}
			}
		);
	}


	
	onFileChangeEvent(file){
		this.fileData = file
	  }
	
	submitForm(): void {

		// console.log("\n ==> submitForm");

		this.submitAttempt = true;

		if (this.addForm.valid) {

			this.apiError = '';

			const form_Data = {
				'title': this.addForm.value.title,
				'image_type': this.addForm.value.image_type,
				'image_key': this.addForm.value.image_key,
				'description': this.addForm.value.description
			}

			const formData = new FormData();

			if(this.fileData){
				formData.append('image', this.fileData);
			  }
		
			  Object.keys(form_Data).forEach(prop => {
				formData.append(prop, form_Data[prop]);
			  });
		

			if (this.isEditing) {

				this._siteImageService.editSiteImage(this.editId, formData).subscribe(

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

			else {
				this._siteImageService.addSiteImage(formData).subscribe(

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
}
