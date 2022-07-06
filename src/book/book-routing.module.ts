import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./domains/first-page/first-page.component";
import {SecondPageComponent} from "./domains/second-page/second-page.component";
import {FourthPageComponent} from "./domains/fourth-page/fourth-page.component";
import {ThirdPageComponent} from "./domains/third-page/third-page.component";

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: '1', component: SecondPageComponent},
  {path: '2', component: ThirdPageComponent},
  {path: '3', component: FourthPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
