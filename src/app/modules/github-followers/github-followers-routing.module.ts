import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GithubFollowersComponent} from "./github-followers.component";

const routes: Routes = [
  {
    path: '',
    component: GithubFollowersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GithubFollowersRoutingModule {}
