import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { ContentRightComponent } from './components/content-right/content-right.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

const routes: Routes = [
  {
    path: '',
    component: ListbookComponent
  },
  {
    path: 'listbook',
    component: ListbookComponent
  },
  {
    path: 'color-picker',
    component: ColorPickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
