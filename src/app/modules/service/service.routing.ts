import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanAnalyzerComponent } from 'src/app/modules/home/network-protection/cfr-full-page/lan-analyzer.component';
import { PentestingComponent } from 'src/app/components/cibersecurity/pentesting/pentesting.component';
import { ProtectionComponent } from 'src/app/components/cibersecurity/protection/protection.component';
import { DigitalLegacyComponent } from 'src/app/components/custom/externalapp-digital-legacy/digital-legacy.component';
import { ExternalLicenseComponent } from 'src/app/components/custom/externallicense/externallicense.component';
import { GeolocalizacionPageComponent } from 'src/app/components/custom/geolocalizacion-page/geolocalizacion-page.component';
import { GravityComponent } from 'src/app/components/custom/gravity/gravity.component';
import { LicenseComponent } from 'src/app/components/custom/license/license.component';
import { LicenseinternetComponent } from 'src/app/components/custom/licenseinternet/licenseinternet.component';
import { NavegacionseguraComponent } from 'src/app/components/custom/navegacionsegura/navegacionsegura.component';
import { AgentServiceFullPageComponent } from '../home/agent-service/agent-service-full-page/agent-service-full-page.component';
import { CyberscoringFullPageComponent } from '../home/cyberscoring-service/cyberscoring-full-page/cyberscoring-full-page.component';
import { ItpFullPageComponent } from '../home/identity-theft-protection/itp-full-page/itp-full-page.component';
import { RgpdFormModelComponent } from '../home/rgpd-service/rgpd-form-model/rgpd-form-model.component';
import { SqFullPageComponent } from '../home/security-questionnaire/sq-full-page/sq-full-page.component';
import { ServiceOnePageComponent } from './service-one-page/service-one-page.component';
import { ServiceComponent } from './service.component';


const routes: Routes = [
  {
    path: '',
    component: ServiceComponent,
    children: [
      {
        path:':code',
        component: ServiceOnePageComponent,
      },
      {
        path:':code/lan-analyzer',
        component: LanAnalyzerComponent,
      },
      {
        path: ':code/lan-analyzer/:param',
        component: LanAnalyzerComponent
      },
      {
        path: ':code/navegacionsegura',
        component: NavegacionseguraComponent,
      },

      {
        path: ':code/geolocalizacion',
        component: GeolocalizacionPageComponent,
      },

      {
        path: ':code/digital-legacy',
        component: DigitalLegacyComponent,
      },

      {
        path: ':code/protection',
        component: ProtectionComponent,
      },

      {
        path: ':code/license',
        component: LicenseComponent,
      },
      {
        path: ':code/licenseinternet',
        component: LicenseinternetComponent,
      },
      {
        path: ':code/pentesting',
        component: PentestingComponent,
      },
      {
        path: ':code/agent',
        component: AgentServiceFullPageComponent
      },
      {
        path: ':code/gravity',
        component: GravityComponent
      },
      {
        path: 'identity-protection',
        component: ItpFullPageComponent,
      },
      {
        path: 'security-questions',
        component: SqFullPageComponent,
      },
      {
        path: 'cyberscoring',
        component: CyberscoringFullPageComponent,
      },
      {
        path:':code/externallicense',
        component: ExternalLicenseComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
