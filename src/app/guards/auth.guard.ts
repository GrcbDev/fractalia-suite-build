import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(
    private router: Router,
    private userService: UserService
) {}

  canActivate() {
    const currentUser = this.userService.currentUserValue;
    if (
      currentUser &&
      Object.keys(currentUser).length > 1
    ) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
