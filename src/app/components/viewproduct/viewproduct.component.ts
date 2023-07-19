import { Component } from '@angular/core';
import { VendorService } from '../../services/vendor.service'

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {

  constructor(
    private service: VendorService
  ){}
  

}
