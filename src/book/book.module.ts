import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    BrowserModule,
    BookRoutingModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class BookModule { }
