import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private bookname :String[];
  constructor() { }

  ngOnInit() {
    this.bookname = ["Harry Potter","Percy Jackson and the Olympians","The Hunger Games","Lord of the Rings","Warriors"];
  }

}

