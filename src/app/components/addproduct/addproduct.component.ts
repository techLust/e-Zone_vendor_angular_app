import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  file:any

  // public addProductForm:FormGroup;

  constructor(
    // private formBuilder: FormBuilder,
    private service: VendorService,
  ){
    // this.addProductForm = this.formBuilder.group({
    //   productName: '',
    //   productCategory: '',
    //   productFreshness: '',
    //   productImage: '',
    //   productDescription:'',
    //   productPrice: '',
    //   productComments: '',
    // })
  }

  onFileSelected(e:any){
    this.file = e.target.files[0]
    // this.addProductForm.get('productImage')?.updateValueAndValidity(file)
    console.log(this.file)
    // this.addProductForm.patchValue({
    //   productImage: file
    // });
  }

  onProductAdd(formDetails:any){
    console.log("Product add clicked", formDetails)
    // console.log(this.addProductForm.value)
    const token = localStorage.getItem('userToken')
    console.log(token)

    const formData = new FormData();
    formData.append('productName', formDetails.productName)
    formData.append('productCategory', formDetails.productCategory)
    formData.append('productFreshness', formDetails.productFreshness)
    formData.append('productImage', this.file)
    formData.append('productDescription', formDetails.productDescription)
    formData.append('productPrice', formDetails.productPrice)
    formData.append('productComments', formDetails.productComments)

    this.service.addProduct(formData, token).subscribe((res:any) => {
      console.log("Product response", res)
    })

  }

}
