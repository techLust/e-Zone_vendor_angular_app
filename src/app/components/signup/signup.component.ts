import { Component } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = '';

  constructor(
    private service: VendorService,
    private router: Router,
  ){}



  onUserSignUp(userData: any){
    console.log("Button clicked")
    console.log(userData)
    this.service.signUp(userData).subscribe((res) => {
      console.log("Service response", res)
      this.router.navigate(['/sign_in'])
    })
    
  }

}
