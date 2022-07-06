import { Component } from '@angular/core';
import {ImageComponent} from "../../components/image/image.component";
import {MainHeadingComponent} from "../../components/main-heading/main-heading.component";
import {SecondPageComponent} from "../second-page/second-page.component";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  providers: [ImageComponent, MainHeadingComponent, SecondPageComponent]
})

export class FirstPageComponent {
}
