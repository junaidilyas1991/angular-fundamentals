import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home-routing.module";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule {}
