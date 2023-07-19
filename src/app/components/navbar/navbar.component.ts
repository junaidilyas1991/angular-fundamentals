import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public authService: AuthService) {
  }

}
