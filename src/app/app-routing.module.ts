import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {NoAccessComponent} from "./no-access/no-access.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  {path: 'followers/:id/:username', loadChildren: () => import('./modules/github-profile/github-profile.module').then(m => m.GithubProfileModule)},
  {path: 'followers', loadChildren: () => import('./modules/github-followers/github-followers.module').then(m => m.GithubFollowersModule)},
  {path: 'archive/:year/:month', loadChildren: () => import('./modules/archive/archive.module').then(m => m.ArchiveModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'no-access', component: NoAccessComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
