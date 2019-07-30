import { Component, OnInit } from '@angular/core';
import { bookList } from 'src/app/data';
import { Book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/book.service.ts/book-service.service';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms'
import { Data } from '@angular/router';

@Component({
  selector: 'app-book-grid-form',
  templateUrl: './book-grid-form.component.html',
  styleUrls: ['./book-grid-form.component.scss']
})
export class BookGridFormComponent implements OnInit {


  constructor(private bookServiceService: BookServiceService, private builder: FormBuilder) { }

  formBook: FormGroup;

  book: Book = null;

  listbook = bookList;

  public mode: string;

  ngOnInit() {
    this.book = {
      id: null,
      name: '',
      tacGia: '',
      price: null,
      des: '',
      status: ''
    };
    this.mode = 'add';
    this.formBook = this.builder.group({
      id: [''],
      name: ['', Validators.required],
      tacGia: ['', Validators.required],
      price: ['', Validators.required],
      des: ['', [Validators.required, Validators.minLength(9)]]
    });
    this.triggerWhenEdit();
  }

  addBook() {
    this.book.id = this.listbook.length + 1;
    this.bookServiceService.saveBook(JSON.parse(JSON.stringify(this.book)));
    this.formBook.reset();
  }

  editBook(){
    this.bookServiceService.saveBook(JSON.parse(JSON.stringify(this.book)));
    this.formBook.reset();
  }

  triggerWhenEdit(){
    this.bookServiceService.bookEditSource$.subscribe(book => {
      this.book = book;
      this.mode = (book.id) ? 'edit' : 'add';
    });
  }

}
