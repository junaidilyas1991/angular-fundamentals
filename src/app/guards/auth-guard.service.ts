import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard {
  constructor(protected router: Router, protected authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) return true;
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
