import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared.module";
import {ArchiveRoutingModule} from "./archive-routing.module";
import {ArchiveComponent} from "./archive.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArchiveRoutingModule
  ],
  declarations: [ArchiveComponent]
})

export class ArchiveModule {}
