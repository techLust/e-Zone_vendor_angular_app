import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private http: HttpClient,
  ) { }

getVendor(){
  
}

signUp(userData:any){
  console.log("Service data", userData)
return this.http.post(`${environment.API_ENDPOINT}/vendor/signup`, userData)
}

signIn(credentials:any){
  console.log("Service credentials",credentials);
  return this.http.post(`${environment.API_ENDPOINT}/vendor/signin`, credentials)
}

addProduct(productDetails:any, token:any){
  // let header= new HttpHeaders();
  // header.append('Content-Type', 'multipart/form-data')
  // header.append('Authorization', token)

  // const headers = new HttpHeaders()
  // .set('Content-Type', 'application/json')
  // .set('Authorization', `Bearer' ${token}`);

// const headers = new HttpHeaders({
//   'Content-Type': 'application/json',
//   'Authorization': `${token}`
// })
  // this.header = new HttpHeaders(token)
  
  console.log("FORM SERVICE", productDetails)
  return this.http.post(`${environment.API_ENDPOINT}/add/product`, productDetails, {headers: {token: `${token}`}} )
}

getProduct(){
  return this.http.get(`${environment.API_ENDPOINT}/get/product`)
}

}
