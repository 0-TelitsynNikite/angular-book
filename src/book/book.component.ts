import {Component} from '@angular/core';
import {interval, of} from "rxjs";

@Component({
  selector: 'book-root',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  constructor() {
    const obs = interval(500).subscribe(data => console.log(data))

    setTimeout(() => {
      obs.unsubscribe()
    }, 2000)
  }
}
