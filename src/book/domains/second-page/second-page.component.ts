import { Component } from '@angular/core';
import {ImageComponent} from "../../components/image/image.component";
import {MainHeadingComponent} from "../../components/main-heading/main-heading.component";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],

  providers: [ImageComponent, MainHeadingComponent, SecondPageComponent]
})
export class SecondPageComponent {
}
