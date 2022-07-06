import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-secondary-heading',
  templateUrl: './secondary-heading.component.html',
  styleUrls: ['./secondary-heading.component.scss']
})
export class SecondaryHeadingComponent {
  @Input() title: string = ''
}
