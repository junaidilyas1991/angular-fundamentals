import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared.module";
import {GithubFollowersRoutingModule} from "./github-followers-routing.module";
import {GithubFollowersComponent} from "./github-followers.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GithubFollowersRoutingModule
  ],
  declarations: [GithubFollowersComponent]
})

export class GithubFollowersModule {}
