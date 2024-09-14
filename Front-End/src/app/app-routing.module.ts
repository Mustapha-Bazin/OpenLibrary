import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BooksComponent } from './component/books/books.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Books",component:BooksComponent},
  {path:"ContactUs",component:ContactUsComponent},
  {path:"SignUp",component:SignUpComponent},
  {path:"LogIn",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
