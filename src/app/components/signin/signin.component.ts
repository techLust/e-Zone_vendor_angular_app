import { Component } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  public signInForm:FormGroup;
  public email: String = '';
  public password: String = '';

  constructor(
    private service: VendorService,
    private router: Router,
    private formBuilder: FormBuilder,
  ){
    this.signInForm = this.formBuilder.group({
      email: '',
      password: '',
    })
  }
  

  onUserSignIn(){
    console.log("Sign in clicked")
    // console.log('Signin component',
    // this.email = this.signInForm.get('email')?.value,
    // this.password = this.signInForm.get('password')?.value
    // )
    console.log(this.signInForm.value)
    this.service.signIn(this.signInForm.value).subscribe((res:any) => {
      console.log("Login response", res)
      if(res){
        localStorage.setItem('userToken', res.token)

      }      
      this.router.navigate(['/dashboard'])
    })
  }

}
