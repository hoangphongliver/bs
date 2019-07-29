import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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

  displayedColumns: string[] = ['select','id', 'name', 'tacGia', 'price','des', 'action','status'];
  books: Book[] = [];
  dataSource = new MatTableDataSource<Book>([]);
  selection = new SelectionModel<Book>(true, []);
  isSelected : string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private bookServiceService: BookServiceService) { }

  ngOnInit() {
    this.isSelected = 'no';
    this.books = bookList;
    this.dataSource.data = this.books;
    this.dataSource.paginator = this.paginator;
    this.triggerWhenSave();
  }

  triggerWhenSave() {
    this.bookServiceService.currentBook.subscribe(book => {
      let isExist = false;
      this.books.forEach((val, i)=>{
        if(book.id == val.id){
          this.books[i] = JSON.parse(JSON.stringify(book));
          isExist = true;
        }else{
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
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  

  delBook(id: number){
    this.books.splice( id - 1 , 1);
    this.books = bookList;
    this.dataSource.data = this.books;
    this.dataSource.paginator = this.paginator;
  }

  editBook(row){
    this.bookServiceService.getBook(JSON.parse(JSON.stringify(row)));
  }

  addFavour(row){
  //  this.isSelected = this.selection.isSelected() ? 'yes' : 'no';
  console.log(row);
  
  }

  changeCheckbox(row){
    console.log(row);
    
    this.selection.toggle(row);
  }
}
