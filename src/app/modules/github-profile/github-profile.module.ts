import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared.module";
import {GithubProfileRoutingModule} from "./github-profile-routing.module";
import {GithubProfileComponent} from "./github-profile.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GithubProfileRoutingModule
  ],
  declarations: [GithubProfileComponent]
})

export class GithubProfileModule {}
