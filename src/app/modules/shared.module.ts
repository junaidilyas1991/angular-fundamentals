import {NgModule} from "@angular/core";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {SummaryPipe} from "../pipes/summary.pipe";


@NgModule({
  imports: [RouterModule],
  declarations: [
    NavbarComponent,
    SummaryPipe
  ],
  exports: [
    NavbarComponent,
    SummaryPipe
  ],
})

export class SharedModule {}
