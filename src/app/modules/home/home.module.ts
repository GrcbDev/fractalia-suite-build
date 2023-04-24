import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ExpertSupportModule } from './expert-support/expert-support.module';
import { CyberscoringModule } from 'src/app/modules/home/cyberscoring-service/cyberscoring/cyberscoring.module';
import { CyberSegurityQuestionModule } from 'src/app/components/custom/cybersecurity-questions/cybersegurity-question.module';
import { TranslateModule } from '@ngx-translate/core';
import { GeolocalizacionModule } from 'src/app/components/custom/cyberalarm/geolocalizacion-integrated/geolocalizacion-integrated.module';
import { CybersecurityServiceModule } from './cybersecurity-service/cybersecurity-service.module';
import { InformativeServiceModule } from './informative-service/informative-service.module';
import { GeolocationServiceModule } from './geolocation-service/geolocation-service.module';
import { CreditCardFraudProtectionModule } from './credit-card-fraud-protection/credit-card-fraud-protection.module';
import { IdentityTheftProtectionModule } from './identity-theft-protection/identity-theft-protection.module';
import { SecurityQuestionnaireModule } from './security-questionnaire/security-questionnaire.module';
import { CyberscoringServiceModule } from './cyberscoring-service/cyberscoring-service.module';
import { ServicessStatusModule } from './servicess-status/servicess-status.module';
import { ItpFullPageModule } from './identity-theft-protection/itp-full-page/itp-full-page.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { DefaultServiceModule } from './default-service/default-service.module';
import { BitdefenderServiceModule } from './bitdefender-service/bitdefender-service.module';
import { AcuetixServiceModule } from './acuetix-service/acuetix-service.module';
import { AttackSimulatorServiceModule } from './attack-simulator-service/attack-simulator-service.module';
import { UserSecurityModule } from './user-security/user-security.module';
import { NetworkProtectionModule } from './network-protection/network-protection.module';
import { ElearningServiceModule } from './elearning-service/elearning-service.module';
import { GravityServiceModule } from './gravity-service/gravity-service.module';
import { SecureBrowsingModule } from './secure-browsing/secure-browsing.module';
import { SecureTransferModule } from './secure-transfer/secure-transfer.module';
import { ProfessionalServiceModule } from './professional-service/professional-service.module';
import { DigitalSupportFormModule } from './digital-support-form/digital-support-form.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ChatServiceModule } from './chat-service/chat-service.module';
import { CprServiceModule } from './cpr-service/cpr-service.module';
import { AntivirusServiceModule } from './antivirus-service/antivirus-service.module';
import { BackupServiceModule } from './backup-service/backup-service.module';
import { DigitalCertificateServiceModule } from './digital-certificate-service/digital-certificate-service.module';
import { DigitalLifeServiceModule } from './digital-life-service/digital-life-service.module';
import { InternetReportServiceModule } from './internet-report-service/internet-report-service.module';
import { EVDServiceModule } from './EVD-service/EVD-service.module';
import { OfficeActivationServiceModule } from './office-activation-service/office-activation-service.module';
import { AgentServiceModule } from './agent-service/agent-service.module';
import { BitdefenderMobileModule } from './bitdefender-mobile/bitdefender-mobile.module';
import { BitdefenderSecurityModule } from './bitdefender-security/bitdefender-security.module';
import { BitdefenderTotalModule } from './bitdefender-total/bitdefender-total.module';
import { CyberAlarmModule } from './cyber-alarm/cyber-alarm.module';
import { DigitalLegacyServiceModule } from './digital-legacy-service/digital-legacy-service.module';
import { DigitalWillServiceModule } from './digital-will-service/digital-will-service.module';
import { CadastreFormServiceModule } from './cadastre-form-service/cadastre-form-service.module';
import { BitdefenderServiceMSMModule } from './bitdefendermsm-service/bitdefendermsm-service.module';
import {FamilyUnitModule} from "../family-unit/family-unit.module";
import { InstructionGuideWebModule } from 'src/app/components/instruction-guide/instruction-guide-web/instruction-guide-web.module';
import { InstructionGuideMobileModule } from 'src/app/components/instruction-guide/instruction-guide-mobile/instruction-guide-mobile.module';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { TrendmicroServiceModule } from './trendmicro-service/trendmicro-service.module';
import { RgpdServiceModule } from './rgpd-service/rgpd-service.module';

@NgModule({
  imports: [
    CommonModule,
    ExpertSupportModule,
    HomeRoutingModule,
    TranslateModule,
    CyberscoringModule,
    CyberSegurityQuestionModule,
    GeolocalizacionModule,
    CDKModalModule,
    //NgxGaugeModule,
    CybersecurityServiceModule,
    InformativeServiceModule,
    GeolocationServiceModule,
    CreditCardFraudProtectionModule,
    IdentityTheftProtectionModule,
    SecurityQuestionnaireModule,
    CyberscoringServiceModule,
    ServicessStatusModule,
    ItpFullPageModule,
    ModalModule,
    BitdefenderServiceModule,
    BitdefenderServiceMSMModule,
    DefaultServiceModule,
    AcuetixServiceModule,
    UserSecurityModule,
    AttackSimulatorServiceModule,
    NetworkProtectionModule,
    ElearningServiceModule,
    GravityServiceModule,
    SecureBrowsingModule,
    SecureTransferModule,
    ProfessionalServiceModule,
    DigitalSupportFormModule,
    NzSpinnerModule,
    ChatServiceModule,
    CprServiceModule,
    AntivirusServiceModule,
    BackupServiceModule,
    DigitalCertificateServiceModule,
    DigitalLifeServiceModule,
    InternetReportServiceModule,
    EVDServiceModule,
    OfficeActivationServiceModule,
    AgentServiceModule,
    BitdefenderMobileModule,
    BitdefenderSecurityModule,
    BitdefenderTotalModule,
    CyberAlarmModule,
    DigitalLegacyServiceModule,
    DigitalWillServiceModule,
    CadastreFormServiceModule,
    FamilyUnitModule,
    TrendmicroServiceModule,
    RgpdServiceModule,
    InstructionGuideMobileModule,
    InstructionGuideWebModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
