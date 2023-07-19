import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AuthGuard} from "../../guards/auth-guard.service";
import {AdminAuthGuard} from "../../guards/admin-auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AdminRoutingModule {}
