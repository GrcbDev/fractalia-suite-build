import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements  CanActivate{
  constructor(
    private router: Router,
    private storageService: StorageService,
    private userService: UserService,
) {}

  canActivate() {
    const currentUser =  this.storageService.secureStorage.getItem("currentUser");
    this.userService.updateCurrentUser(currentUser);
    if(!currentUser){
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}

