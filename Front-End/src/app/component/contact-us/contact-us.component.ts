import { Component } from '@angular/core';
import { ContactUs } from '../../interfaces/contact-us';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactUs:ContactUs={name:'',email:'',message:''}
  sendFunction():void{
    console.log('message')
  }
}
