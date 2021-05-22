import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';
import { DropdownListService } from 'src/app/_services/dropdown-list.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  pageName : string = 'product'
  backUrl : string = '/product' ;
  
  addForm: FormGroup;

  editId : string = null;
  isEditing : boolean = false;

  submitAttempt: boolean = false;
  formErrors: any[] = [];
  apiError: string = null;

  categoryDropdown: Array<any> = [];
  subcategoryDropdown: Array<any> = [];
  availableSubcategoryDropdown: Array<any> = [];
  importingDropdown: Array<any> = [];
  typeDropdown: Array<any> = [];
  sizeDropdown: Array<any> = [];

  fileData: File = null;
  previewUrl:string =  null; //'assets/img/no_image_product.jpg';

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService : ProductService,
    private _dropdownListService : DropdownListService,

  ) {

    this.editId = this._route.snapshot.paramMap.get('id');
    if(this.editId){
      this.isEditing = true;
    }

    this.addForm = _formBuilder.group(
      {
        'product_title': [null, Validators.compose([Validators.required])],
        'category_id': [null, Validators.compose([Validators.required])],
        'subcategory_id': [null, Validators.compose([Validators.required])],
        'importing_id': [null, Validators.compose([Validators.required])],
        'glace': [null, Validators.compose([Validators.required])],
        'type_id': [null, Validators.compose([Validators.required])],
        'sizes': [null, Validators.compose([Validators.required])],
        'price': [null, Validators.compose([Validators.required])],
        'extra_note': [''],
        'description': [''],

      }
      
    );

    this.initDropdowns();

   }

  ngOnInit() {

    if(this.isEditing){
      
      this.setEditData();
    }
  }


  initDropdowns(){

    this._productService.productFormDropdownList().subscribe(
      (response)=>{

        if(response.success){
          this.categoryDropdown = response.data.category;
          this.subcategoryDropdown = response.data.subcategory;
          this.importingDropdown = response.data.importing;
          this.typeDropdown = response.data.type;
          this.sizeDropdown = response.data.size;
        }
      }
    );
  }

  clearSubcategory(){

      this.addForm.patchValue({
        'subcategory_id': null
      });
    
  }

  updateAvailableSubcategoryDropdown(){

    this.availableSubcategoryDropdown = this.subcategoryDropdown.filter(
      (ele)=>{
        if(ele.category_id == this.addForm.value.category_id){
          return ele
        }
    });


  }

  setEditData(){
    this._productService.getProduct(this.editId).subscribe(
      (response)=>{
        if(response.success){
          this.addForm.patchValue(
            {
              'product_title': response.data.title,
              'category_id': response.data.category_id,
              'subcategory_id': response.data.subcategory_id,
              'importing_id': response.data.importing_id,
              'glace': response.data.glace,
              'extra_note': response.data.extra_note,
              'description': response.data.description,
              'type_id': response.data.type_id,
              'sizes': response.data.size_ids,
              'price': response.data.price
            }
            );

            this.previewUrl = response.data.image_url;
            this.updateAvailableSubcategoryDropdown();

        }
        else{
          this._router.navigate([this.backUrl]);
        }
      }
    );

  }


  onFileChangeEvent(file){
    this.fileData = file;
  }

  submitForm():void{
    
    console.log("\n ==> submitForm");

    this.submitAttempt = true;

    if(this.addForm.valid){

      this.apiError = '';

      const addFormData = {
        'title': this.addForm.value.product_title,
        'category_id': this.addForm.value.category_id,
        'subcategory_id': this.addForm.value.subcategory_id,
        'importing_id': this.addForm.value.importing_id,
        'glace': this.addForm.value.glace,
        'extra_note': this.addForm.value.extra_note,
        'description': this.addForm.value.description,
        'type_id': this.addForm.value.type_id,
        'sizes': this.addForm.value.sizes,
        'price': this.addForm.value.price

      }

      const formData = new FormData();
      
      if(this.fileData){
        formData.append('image', this.fileData);
      }

      Object.keys(addFormData).forEach(prop => {
        formData.append(prop, addFormData[prop]);
      });

      if(this.isEditing){

      this._productService.editProduct(this.editId, formData).subscribe(
      
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
        this._productService.addProduct(formData).subscribe(
         
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

    else{
      console.log("addForm", this.addForm)
    }

  }


}
