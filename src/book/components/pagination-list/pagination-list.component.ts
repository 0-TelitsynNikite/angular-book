import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.scss']
})
export class PaginationListComponent {
  numberOfPages = [1, 2, 3]
}
