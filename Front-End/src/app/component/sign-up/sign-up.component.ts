import { Component } from '@angular/core';
import { SignUp } from '../../interfaces/sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
confirmPassword:string='';
signUp:SignUp={userName:'',email:'',password:''}
control:boolean=false
signUpFunction():void{
  this.control=this.signUp.password != this.confirmPassword
  this.signUp.password=''
  this.confirmPassword=''
  
}
}
