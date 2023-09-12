import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VendorService } from '../../services/vendor.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
    // success, error, info, warning take (message, title, ToastConfig) pass an options object to replace any default option.


    const formData = new FormData();
    formData.append('productName', formDetails.productName)
    formData.append('brand', formDetails.productName)
    formData.append('category', formDetails.category)
    formData.append('freshness', formDetails.freshness)
    formData.append('image', this.file)
    formData.append('description', formDetails.description)
    formData.append('price', formDetails.price)
    formData.append('comments', formDetails.comments)
    formData.append('quantity', formDetails.quantity)

    this.service.addProduct(formData, token).subscribe((res:any) => {
      if(res){
        console.log("Product response", res)
        this.toastr.success('Product added!', '', {
          timeOut: 2000,
        });
      }else{
        this.toastr.error('Product added', 'Toastr fun!', {
          timeOut: 2000,
        });
      }
    })

  }

}
