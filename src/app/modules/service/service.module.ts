import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ItpFullPageModule } from '../home/identity-theft-protection/itp-full-page/itp-full-page.module';
import { SqFullPageModule } from '../home/security-questionnaire/sq-full-page/sq-full-page.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { CfpFullPageModule } from '../home/credit-card-fraud-protection/cfp-full-page/cfp-full-page.module';
import { CyberscoringFullPageModule } from '../home/cyberscoring-service/cyberscoring-full-page/cyberscoring-full-page.module';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { ServicessStatusModule } from '../home/servicess-status/servicess-status.module';
import { GravityServiceModule } from '../home/gravity-service/gravity-service.module';
import { ChatServiceModule } from '../home/chat-service/chat-service.module';
import { ExpertSupportModule } from '../home/expert-support/expert-support.module';
import { InformativeServiceModule } from '../home/informative-service/informative-service.module';
import { NetworkProtectionModule } from '../home/network-protection/network-protection.module';
import { LanAnalyzerModule } from 'src/app/modules/home/network-protection/cfr-full-page/lan-analyzer.module';
import { ChartsModule } from 'ng2-charts';
import { UserSecurityModule } from '../home/user-security/user-security.module';
import { AcuetixServiceModule } from '../home/acuetix-service/acuetix-service.module';
import { PentestingModule } from 'src/app/components/cibersecurity/pentesting/pentesting.module';
import { BitdefenderServiceModule } from '../home/bitdefender-service/bitdefender-service.module';
import { CprServiceModule } from '../home/cpr-service/cpr-service.module';
import { AttackSimulatorServiceModule } from '../home/attack-simulator-service/attack-simulator-service.module';
import { SecureTransferModule } from '../home/secure-transfer/secure-transfer.module';
import { IdentityTheftProtectionModule } from '../home/identity-theft-protection/identity-theft-protection.module';
import { CreditCardFraudProtectionModule } from '../home/credit-card-fraud-protection/credit-card-fraud-protection.module';
import { SecureBrowsingModule } from '../home/secure-browsing/secure-browsing.module';
import { GeolocationServiceModule } from '../home/geolocation-service/geolocation-service.module';
import { ElearningServiceModule } from '../home/elearning-service/elearning-service.module';
import { ServiceRoutingModule } from './service.routing';
import { ServiceComponent } from './service.component';
import { ServiceOnePageComponent } from './service-one-page/service-one-page.component';
import { ProfessionalServiceModule } from '../home/professional-service/professional-service.module';
import { DigitalSupportFormModule } from '../home/digital-support-form/digital-support-form.module';
import { AntivirusServiceModule } from '../home/antivirus-service/antivirus-service.module';
import { ExternalLicenseModule } from 'src/app/components/custom/externallicense/externallicense.module';
import { BackupServiceModule } from '../home/backup-service/backup-service.module';
import { DigitalCertificateServiceModule } from '../home/digital-certificate-service/digital-certificate-service.module';
import { DigitalLifeServiceModule } from '../home/digital-life-service/digital-life-service.module';
import { InternetReportServiceModule } from '../home/internet-report-service/internet-report-service.module';
import { OfficeActivationServiceModule } from '../home/office-activation-service/office-activation-service.module';
import { AgentServiceModule } from '../home/agent-service/agent-service.module';
import { AgentServiceFullPageModule } from '../home/agent-service/agent-service-full-page/agent-service-full-page.module';
import { BitdefenderMobileModule } from '../home/bitdefender-mobile/bitdefender-mobile.module';
import { BitdefenderSecurityModule } from '../home/bitdefender-security/bitdefender-security.module';
import { LicenceInternetModule } from 'src/app/components/custom/licenseinternet/licenceinternet.module';
import { BitdefenderTotalModule } from '../home/bitdefender-total/bitdefender-total.module';
import { LicenceModule } from 'src/app/components/custom/license/licence.module';
import { CyberAlarmModule } from '../home/cyber-alarm/cyber-alarm.module';
import { NavegacionSeguraModule } from 'src/app/components/custom/navegacionsegura/navegacionsegura.module';
import { GeolocalizacionPageModule } from 'src/app/components/custom/geolocalizacion-page/geolocalizacion-page.module';
import { ProtectionModule } from 'src/app/components/cibersecurity/protection/protection.module';
import { DigitalLegacyServiceModule } from '../home/digital-legacy-service/digital-legacy-service.module';
import { DigitalLegacyModule } from 'src/app/components/custom/externalapp-digital-legacy/digital-legacy.module';
import { EVDServiceModule } from '../home/EVD-service/EVD-service.module';
import { CadastreFormServiceModule } from '../home/cadastre-form-service/cadastre-form-service.module';
import { DigitalWillServiceModule } from '../home/digital-will-service/digital-will-service.module';
import { GravityModule } from 'src/app/components/custom/gravity/gravity.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { BmsFullPageModule } from '../home/bitdefender-service/bms-full-page/bms-full-page.module';
import { MSMFullPageModule } from '../home/bitdefendermsm-service/msm-full-page/msm-full-page.module';
import { TrendmicroServiceModule } from '../home/trendmicro-service/trendmicro-service.module';
import { RgpdServiceModule } from '../home/rgpd-service/rgpd-service.module';
import { CitFullPageModule } from '../home/credit-card-fraud-protection/cit-full-page/cit-full-page.module';
import { RgpdFormModelModule } from '../home/rgpd-service/rgpd-form-model/rgpd-form-model.module';

@NgModule({
  imports: [
    CommonModule,
    NzSpinnerModule,
    DynamicRenderComponentModule,
    ItpFullPageModule,
    GravityServiceModule,
    SqFullPageModule,
    ServiceRoutingModule,
    // CfpFullPageModule,
    CitFullPageModule,
    CyberscoringFullPageModule,
    ServicessStatusModule,
    ChatServiceModule,
    ExpertSupportModule,
    InformativeServiceModule,
    NetworkProtectionModule,
    LanAnalyzerModule,
    ChartsModule,
    UserSecurityModule,
    PentestingModule,
    AcuetixServiceModule,
    BitdefenderServiceModule,
    CprServiceModule,
    AttackSimulatorServiceModule,
    SecureTransferModule,
    IdentityTheftProtectionModule,
    CreditCardFraudProtectionModule,
    SecureBrowsingModule,
    GeolocationServiceModule,
    ElearningServiceModule,
    ProfessionalServiceModule,
    DigitalSupportFormModule,
    AntivirusServiceModule,
    ExternalLicenseModule,
    BackupServiceModule,
    DigitalCertificateServiceModule,
    DigitalLifeServiceModule,
    InternetReportServiceModule,
    OfficeActivationServiceModule,
    AgentServiceModule,
    AgentServiceFullPageModule,
    BitdefenderMobileModule,
    BitdefenderSecurityModule,
    LicenceInternetModule,
    LicenceModule,
    BitdefenderTotalModule,
    CyberAlarmModule,
    NavegacionSeguraModule,
    GeolocalizacionPageModule,
    ProtectionModule,
    DigitalLegacyServiceModule,
    DigitalWillServiceModule,
    DigitalLegacyModule,
    EVDServiceModule,
    GravityModule,
    CadastreFormServiceModule,
    BmsFullPageModule,
    MSMFullPageModule,
    TrendmicroServiceModule,
    RgpdServiceModule,
    RgpdFormModelModule
  ],
  declarations: [ServiceComponent, ServiceOnePageComponent],
  exports: [ServiceComponent, ServiceOnePageComponent],
  providers: [
    NgbActiveModal,
    DatePipe,
  ]
})
export class ServiceModule { }
