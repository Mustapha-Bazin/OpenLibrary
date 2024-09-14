import { Component } from '@angular/core';
import { LogIn } from '../../interfaces/log-in';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logIn:LogIn={userName:'',password:''}
  logInFunction():void{
    console.log('hello')
  }
}
