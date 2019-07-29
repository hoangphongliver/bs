import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule , FormControl , AbstractControl } from '@angular/forms'

//material
import { MatButtonModule , MatCheckboxModule , MatSidenavModule , MatMenuModule, MatIconModule , MatInputModule ,MatAutocompleteModule , MatSelectModule , MatRadioModule , MatTableModule, MatPaginatorModule , MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentRightComponent } from './components/content-right/content-right.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ListbookComponent } from './components/listbook/listbook.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { BookGridFormComponent } from './components/book-grid-form/book-grid-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentRightComponent,
    ListbookComponent,
    DataTableComponent,
    BookGridFormComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatRadioModule,
    AppRoutingModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
