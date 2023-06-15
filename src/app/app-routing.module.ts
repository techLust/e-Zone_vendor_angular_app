import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'add_product', 
    component: AddproductComponent,
  },
  {
    path: 'view_product', 
    component: ViewproductComponent,
  },
  {
    path: 'sign_in',
    component: SigninComponent
  },
  {
    path: 'sign_up',
    component: SignupComponent,
  },
  {
    path: 'help_center', 
    component: HelpcenterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
