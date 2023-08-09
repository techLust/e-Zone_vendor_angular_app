import { Component } from '@angular/core';
import { VendorService } from '../../services/vendor.service'

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {

  productList: any

  constructor(
    private service: VendorService
  ){}
  
  ngOnInit(){
    this.getAllProduct()
    console.log('Get all product called')
  }

  getAllProduct(){
    const vendorId = localStorage.getItem("vendorId")
     console.log("Vendor Id", vendorId)

     this.service.getProduct().subscribe((res:any) => {
       console.log("Product", res.data)
       this.productList = res.data.filter((el:any) => el.userId == vendorId)
     })
   }

}
