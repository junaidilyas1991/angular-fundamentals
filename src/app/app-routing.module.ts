import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ArchiveComponent } from './archive/archive.component';
import {AdminComponent} from "./admin/admin.component";
import {NoAccessComponent} from "./no-access/no-access.component";
import {AuthGuard} from "./guards/auth-guard.service";
import {AdminAuthGuard} from "./guards/admin-auth-guard.service";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'followers/:id/:username', component: GithubProfileComponent},
  {path: 'followers', component: GithubFollowersComponent},
  {path: 'archive/:year/:month', component: ArchiveComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'no-access', component: NoAccessComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
