import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/book.service.ts/book-service.service';

@Component({
  selector: 'app-text-color',
  templateUrl: './text-color.component.html',
  styleUrls: ['./text-color.component.scss']
})
export class TextColorComponent implements OnInit {

  constructor(private colorService: BookServiceService) { }

  color : string;
  fontSzie: number;

  ngOnInit() {
    this.color = 'seagreen';
    this.fontSzie = null;
    this.triggerWhenSave();
    this.triggerFontSize();
  }

  triggerWhenSave(){
    this.colorService.colorSource$.subscribe(color =>{
      this.color = JSON.parse(JSON.stringify(color));
      console.log(this.color);
    })
  }

  triggerFontSize(){
    this.colorService.fontSizeSource$.subscribe(fontSize =>{
      this.fontSzie = JSON.parse(JSON.stringify(fontSize));
      console.log(this.fontSzie);
    })
  }

}
