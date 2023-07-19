import { Component } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  sendProductToViewPage:any;
  
  constructor(
    private service:VendorService
  ){}

  getAllProduct(){
    const vendorId = localStorage.getItem("userToken")
     console.log("Vendor Id", vendorId)
     this.service.getProduct().subscribe((res:any) => {
       console.log("Product", res.data)
     })
   }

}
