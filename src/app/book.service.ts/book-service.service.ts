import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private bookSource = new Subject<Book>();
  
  currentBook = this.bookSource.asObservable();

  private bookEditSource = new Subject<Book>();

  bookEditSource$ = this.bookEditSource.asObservable();

  private colorSource = new Subject<[]>();

  colorSource$ = this.colorSource.asObservable();

  private fontSizeSource = new Subject<[]>();

  fontSizeSource$ = this.fontSizeSource.asObservable();

  constructor() { }

  saveBook(book: Book) {
    this.bookSource.next(book)
  }

  getBook(book: Book){
    this.bookEditSource.next(book);
  }

  saveColor(color){
    this.colorSource.next(color);
  }

  saveFontSize(fontSize){
    this.fontSizeSource.next(fontSize);
  }
}

