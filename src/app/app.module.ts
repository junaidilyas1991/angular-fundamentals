import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFormatDirective } from './directives/input-format.directive';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { AppErrorHandler } from './common/app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ArchiveComponent } from './archive/archive.component';
import {OrderService} from "./services/order.service";
import {AuthService} from "./services/auth.service";

import {AuthGuard} from "./guards/auth-guard.service";
import {AdminAuthGuard} from "./guards/admin-auth-guard.service";
import {AdminComponent} from "./admin/admin.component";


@NgModule({
  declarations: [
    // components
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
    NavbarComponent,
    AdminComponent,

    // directives
    InputFormatDirective,
     ForgotPasswordComponent,
     PostsComponent,
     GithubFollowersComponent,
     GithubProfileComponent,
     ArchiveComponent

    // pipes
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    DataService,
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
