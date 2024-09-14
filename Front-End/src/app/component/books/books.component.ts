import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
thead:string[]=['id','book title','author','available','book now'];
tdate:any[][]=[['NAN','NAN','NAN','NAN']]
}
