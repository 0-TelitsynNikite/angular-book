import { Component } from '@angular/core';
import {ImageComponent} from "../../components/image/image.component";
import {MainHeadingComponent} from "../../components/main-heading/main-heading.component";
import {SecondPageComponent} from "../second-page/second-page.component";

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.scss'],

  providers: [ImageComponent, MainHeadingComponent, SecondPageComponent]
})
export class FourthPageComponent {
}
