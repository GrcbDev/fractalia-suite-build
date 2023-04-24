import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SuiteService } from '../services/suite.service';

@Injectable({
  providedIn: 'root'
})
export class IsResidentialLayoutGuard implements  CanActivate{
  constructor(
    private router: Router, 
    private suiteService: SuiteService
) {}

  canActivate() {
    if(this.suiteService.isUnitFamily){
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
