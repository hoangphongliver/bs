import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/book.service.ts/book-service.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor(private colorService: BookServiceService) { }

  color: string
  fontSize: number;

  ngOnInit() {
    this.color = '';
    this.fontSize = 16;
  }

  colors = ['red','blue','green','gray','seagreen','black','Purple','Maroon','Silver','Teal','Navy'];

  getColor(color){
    this.color = color;
    this.colorService.saveColor(this.color);
  }

  upFontSize(){
    this.fontSize +=1;
    this.colorService.saveFontSize(this.fontSize);
  }

  downFontSize(){
    this.fontSize -=1;
    this.colorService.saveFontSize(this.fontSize);
  }
}
