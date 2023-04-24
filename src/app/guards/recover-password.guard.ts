import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginType } from '../modules/security/login/shared/LoginType';
import { PartnerService } from '../services/partner.service';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordGuard implements  CanActivate{
  constructor(
    private router: Router,
    private partnerService: PartnerService,
) {}

  canActivate() {

    if (
      this.partnerService.partner.loginType == LoginType.LoginWithEmailAndPassword ||
      this.partnerService.partner.loginType == LoginType.LoginByInvitationCode ||
      this.partnerService.partner.loginType == LoginType.LoginWithLicenseAndPassword ||
      this.partnerService.partner.loginType == LoginType.LoginByToken ||
      this.partnerService.partner.loginType == LoginType.LoginWithSSOADTBrasil
    ) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
