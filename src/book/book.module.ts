import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { MainHeadingComponent } from './components/main-heading/main-heading.component';
import { SecondaryHeadingComponent } from './components/secondary-heading/secondary-heading.component';
import { PaginationListComponent } from './components/pagination-list/pagination-list.component';
import { ImageComponent } from './components/image/image.component';
import { FirstPageComponent } from './domains/first-page/first-page.component';
import { SecondPageComponent } from './domains/second-page/second-page.component';
import { ThirdPageComponent } from './domains/third-page/third-page.component';
import { FourthPageComponent } from './domains/fourth-page/fourth-page.component';

@NgModule({
  imports: [
    BrowserModule,
    BookRoutingModule,
  ],
  declarations: [
    BookComponent,
    MainHeadingComponent,
    SecondaryHeadingComponent,
    PaginationListComponent,
    ImageComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class BookModule { }
