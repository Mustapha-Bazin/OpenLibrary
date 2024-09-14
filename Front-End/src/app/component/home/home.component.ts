import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title:string="Welcome to OpenLibrary";
books:string[][]=[['book1','Philosophy'],
                  ['book2','History'],
                  ['book3','Sport']]
}
