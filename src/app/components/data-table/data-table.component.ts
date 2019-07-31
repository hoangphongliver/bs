import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/models/book';
import { bookList } from 'src/app/data';
import { BookServiceService } from 'src/app/book.service.ts/book-service.service';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'tacGia', 'price', 'des', 'action', 'status'];
  books: Book[] = [];
  dataSource = new MatTableDataSource<Book>([]);
  selection = new SelectionModel<Book>(true, []);
  isSelected: boolean;
  icon: string = '';

  arrChecked = [];

  bookArr = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private bookServiceService: BookServiceService) { }

  ngOnInit() {
    this.isSelected = false;
    this.books = bookList;
    this.dataSource.data = this.books;
    this.dataSource.paginator = this.paginator;
    this.triggerWhenSave();
  }

  triggerWhenSave() {
    this.bookServiceService.currentBook.subscribe(book => {
      let isExist = false;
      this.books.forEach((val, i) => {
        if (book.id == val.id) {
          this.books[i] = JSON.parse(JSON.stringify(book));
          isExist = true;
        } else {
          isExist = false;
        }
      })
      if (!isExist) {
        this.books.push(book);
      }
      this.dataSource.data = JSON.parse(JSON.stringify(this.books));
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.isSelected = false;
    } else {
      this.dataSource.data.forEach(row => {
        this.selection.select(row);
        this.isSelected = true;
      });
    }
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


  delBook(id: number) {
    this.books.splice(id, 1);
    this.books = bookList;
    this.dataSource.data = this.books;
    this.dataSource.paginator = this.paginator;
    console.log(id);
  }

  editBook(row) {
    this.bookServiceService.getBook(JSON.parse(JSON.stringify(row)));
  }

  changeCheckbox(row, event) {
    if (event.checked == true) {
      this.arrChecked.push(row.id);
    } else {
      this.arrChecked.splice(this.arrChecked.indexOf(row.id), 1);
    }
    console.log(this.arrChecked);
  }

  addFavour() {
    this.books.forEach((bookItem) => {
      if (this.isSelected) {
        bookItem.status = "done_outline";
      }
      this.arrChecked.forEach((item) => {
        if (bookItem.id == item) {
          bookItem.status = "done_outline";
        }
      })
    })
  }

  unFavour() {
    this.books.forEach((bookItem) => {
      if(this.isSelected){
        bookItem.status = "";
      }
      this.arrChecked.forEach((item) => {
        if(bookItem.id == item){
          bookItem.status = "";
        }
      })
    })
  }
}
