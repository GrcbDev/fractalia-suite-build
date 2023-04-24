import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { Service } from 'src/app/models/service';
import { LocalService } from 'src/app/services/local.service';
import { AcuetixServiceComponent } from '../../home/acuetix-service/acuetix-service.component';
import { AgentServiceComponent } from '../../home/agent-service/agent-service.component';
import { AntivirusServiceComponent } from '../../home/antivirus-service/antivirus-service.component';
import { AttackSimulatorServiceComponent } from '../../home/attack-simulator-service/attack-simulator-service.component';
import { BackupServiceComponent } from '../../home/backup-service/backup-service.component';
import { BitdefenderMobileComponent } from '../../home/bitdefender-mobile/bitdefender-mobile.component';
import { BitdefenderSecurityComponent } from '../../home/bitdefender-security/bitdefender-security.component';
import { BmsFullPageComponent } from '../../home/bitdefender-service/bms-full-page/bms-full-page.component';
import { BitdefenderTotalComponent } from '../../home/bitdefender-total/bitdefender-total.component';
import { MSMFullPageComponent } from '../../home/bitdefendermsm-service/msm-full-page/msm-full-page.component';
import { CadastreFormServiceComponent } from '../../home/cadastre-form-service/cadastre-form-service.component';
import { ChatServiceComponent } from '../../home/chat-service/chat-service.component';
import { CprServiceComponent } from '../../home/cpr-service/cpr-service.component';
import { CreditCardFraudProtectionComponent } from '../../home/credit-card-fraud-protection/credit-card-fraud-protection.component';
import { CyberAlarmComponent } from '../../home/cyber-alarm/cyber-alarm.component';
import { CyberscoringFullPageComponent } from '../../home/cyberscoring-service/cyberscoring-full-page/cyberscoring-full-page.component';
import { DefaultServiceComponent } from '../../home/default-service/default-service.component';
import { DigitalCertificateServiceComponent } from '../../home/digital-certificate-service/digital-certificate-service.component';
import { DigitalLegacyServiceComponent } from '../../home/digital-legacy-service/digital-legacy-service.component';
import { DigitalLifeServiceComponent } from '../../home/digital-life-service/digital-life-service.component';
import { DigitalSupportFormComponent } from '../../home/digital-support-form/digital-support-form.component';
import { DigitalWillServiceComponent } from '../../home/digital-will-service/digital-will-service.component';
import { ElearningServiceComponent } from '../../home/elearning-service/elearning-service.component';
import { EVDServiceComponent } from '../../home/EVD-service/EVD-service.component';
import { ExpertSupportComponent } from '../../home/expert-support/expert-support.component';
import { GeolocationServiceComponent } from '../../home/geolocation-service/geolocation-service.component';
import { GravityServiceComponent } from '../../home/gravity-service/gravity-service.component';
import { IdentityTheftProtectionComponent } from '../../home/identity-theft-protection/identity-theft-protection.component';
import { InformativeServiceComponent } from '../../home/informative-service/informative-service.component';
import { InternetReportServiceComponent } from '../../home/internet-report-service/internet-report-service.component';
import { NetworkProtectionComponent } from '../../home/network-protection/network-protection.component';
import { OfficeActivationServiceComponent } from '../../home/office-activation-service/office-activation-service.component';
import { ProfessionalServiceComponent } from '../../home/professional-service/professional-service.component';
import { SecureBrowsingComponent } from '../../home/secure-browsing/secure-browsing.component';
import { SecureTransferComponent } from '../../home/secure-transfer/secure-transfer.component';
import { SqFullPageComponent } from '../../home/security-questionnaire/sq-full-page/sq-full-page.component';
import { UserSecurityComponent } from '../../home/user-security/user-security.component';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { ServiceTypes } from './shared/serviceCodes';
import { TrendmicroServiceComponent } from '../../home/trendmicro-service/trendmicro-service.component';
import { RgpdServiceComponent } from '../../home/rgpd-service/rgpd-service.component';

@Component({
  selector: 'app-service-one-page',
  templateUrl: './service-one-page.component.html',
  styleUrls: ['./service-one-page.component.scss']
})
export class ServiceOnePageComponent implements OnInit {
  serviceCode: string;

  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sidebarService: SidebarService,
    private dynamicRenderComponentService: DynamicRenderComponentService,
    public localService: LocalService,
  ) {
   }

  ngOnInit() {

    this.route.params.subscribe(val => {
      this.serviceCode = val['code'];
      const findService = this.sidebarService.userServicesFormated.find(x => x.code == this.serviceCode);
      this.loadComponentByBussinessStrategy(findService)

      // const CFR = this.sidebarService.userServicesFormated.filter(x => x.typeCode == 'FSK');
      // console.log('one-page', CFR);
      // this.loadComponentByBussinessStrategy(CFR ? CFR[0] : null)
    });
  }

  loadComponentByBussinessStrategy(service: Service) {
    if(!service) {
      this.renderDefaultServicePage(service)
      return;
    }
    switch (service.typeCode) {

      case ServiceTypes.Chat:
        this.renderChatPage(service);
        break;
      case ServiceTypes.Informative:
        this.renderInformativeServicePage(service);
        break;
      case ServiceTypes.Gravity:
        this.renderGravityPage(service);
        break;
      case ServiceTypes.NetworkProtection:
        this.renderNetworkProtectionPage(service);
        break;
      case ServiceTypes.UserSegurity:
        this.renderUserSegurityPage(service);
        break;

      case ServiceTypes.Acuetix:
        this.renderAcuetixPage(service);
        break;

      case ServiceTypes.BitDefender:
        this.localService.setJsonValue('bmsData', service);
        this.renderBitDefenderPage(service);
        break;

      case ServiceTypes.BitDefenderMSM:
        this.renderBitDefenderMSMPage(service);
        break;

      case ServiceTypes.CPR:
        this.renderCPRPage(service);
        break;

      case ServiceTypes.AttackSimulator:
        this.renderAttackSimulatorPage(service);
        break;

      case ServiceTypes.SecureTransfer:
        this.renderSecureTransferPage(service);
        break;

      case ServiceTypes.IdentityTheftProtection:
        this.renderIdentityTheftProtectionPage(service);
        break;

      case ServiceTypes.CreditCardProtection:
        this.renderCreditCardProtectionPage(service);
        break;

      case ServiceTypes.SecureBrowsing:
        this.renderSecureBrowsingPage(service);
        break;

      case ServiceTypes.Geolocation:
        this.renderGeolocationPage(service);
        break;

      case ServiceTypes.Elearning:
        this.renderElearningPage(service);
        break;

      case ServiceTypes.Cyberscoring:
          this.renderCyberscoringPage(service);
        break;

      case ServiceTypes.SecurityQuestionnaire:
          this.renderSecurityQuestionnairePage(service);
        break;
      case ServiceTypes.ProfessionalServices:
        this.renderProfessionalServicesPage(service);
       break;

      case ServiceTypes.DigitalSupportForm:
        this.renderDigitalSupportFormPage(service);
       break;

      case ServiceTypes.Antivirus:
        this.renderAntivirusPage(service);
       break;

      case ServiceTypes.Backup:
        this.renderBackupPage(service);
       break;

      case ServiceTypes.DigitalCertificate:
        this.renderDigitalCertificatePage(service);
       break;

      case ServiceTypes.DigitalLife:
        this.renderDigitalLifePage(service);
       break;

      case ServiceTypes.InternetReport:
        this.renderInternetReportPage(service);
       break;

      case ServiceTypes.ThreeHundredSixtyFive:
        this.renderThreeHundredSixtyFivePage(service);
       break;

      case ServiceTypes.Agent:
        this.renderAgentPage(service);
        break;

      case ServiceTypes.BitDefenderMobile:
        this.renderBitDefenderMobilePage(service);
        break;

      case ServiceTypes.BitDefenderSecurity:
        this.renderBitDefenderSecurityPage(service);
        break;

      case ServiceTypes.BitDefenderTotal:
          this.renderBitDefenderTotalPage(service);
        break;

      case ServiceTypes.CyberAlarm:
        this.renderCyberAlarmPage(service);
      break;

      case ServiceTypes.DigitalLegacy:
        this.renderDigitalLegacyPage(service);
      break;

      case ServiceTypes.DigitalWill:
        this.renderDigitalWillPage(service);
      break;

      case ServiceTypes.EVDService:
        this.renderEVDServicePage(service);
       break;

      case ServiceTypes.CadastreForm:
        this.renderCadastreFormPage(service)
       break;

      case ServiceTypes.TrendMicro:
        this.renderTrendmicroPage(service);
       break;

      case ServiceTypes.RGPD:
        this.renderRgpdPage(service);
        break;

      default:
        this.renderDefaultServicePage(service);
        break;
    }
  }



  renderExportSuppportPage(service){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ExpertSupportComponent, service);
  }

  renderInformativeServicePage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, InformativeServiceComponent, service);
  }

  renderChatPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ChatServiceComponent, service);
  }

  renderGravityPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, GravityServiceComponent, service);
  }

  renderNetworkProtectionPage(service) {
    // analizar step 2
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, NetworkProtectionComponent, service);
  }

  renderUserSegurityPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, UserSecurityComponent, service);
  }

  renderAcuetixPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, AcuetixServiceComponent, service);
  }

  renderBitDefenderPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, BmsFullPageComponent, service);
  }

  renderBitDefenderMSMPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, MSMFullPageComponent, service);
  }

  renderCPRPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CprServiceComponent, service);
  }

  renderAttackSimulatorPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, AttackSimulatorServiceComponent, service);
  }

  renderSecureTransferPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, SecureTransferComponent, service);
  }

  renderIdentityTheftProtectionPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, IdentityTheftProtectionComponent, service);
  }

  renderCreditCardProtectionPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CreditCardFraudProtectionComponent, service);
  }

  renderSecureBrowsingPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, SecureBrowsingComponent, service);
  }

  renderGeolocationPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, GeolocationServiceComponent, service);
  }

  renderElearningPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ElearningServiceComponent, service);
  }

  renderCyberscoringPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CyberscoringFullPageComponent, service);
  }

  renderSecurityQuestionnairePage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, SqFullPageComponent, service);
  }

  renderProfessionalServicesPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ProfessionalServiceComponent, service);
  }

  renderDigitalSupportFormPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DigitalSupportFormComponent, service);
  }

  renderAntivirusPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, AntivirusServiceComponent, service);
  }

  renderBackupPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, BackupServiceComponent, service);
  }

  renderDigitalCertificatePage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DigitalCertificateServiceComponent, service);
  }

  renderDigitalLifePage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DigitalLifeServiceComponent, service);
  }

  renderInternetReportPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, InternetReportServiceComponent, service);
  }


  renderThreeHundredSixtyFivePage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, OfficeActivationServiceComponent, service);
  }

  renderAgentPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, AgentServiceComponent, service);
  }

  renderBitDefenderMobilePage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, BitdefenderMobileComponent, service);
  }

  renderBitDefenderSecurityPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, BitdefenderSecurityComponent, service);
  }

  renderBitDefenderTotalPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, BitdefenderTotalComponent, service);
  }

  renderCyberAlarmPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CyberAlarmComponent, service);
  }

  renderDigitalLegacyPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DigitalLegacyServiceComponent, service);
  }

  renderDigitalWillPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DigitalWillServiceComponent, service);
  }


  renderEVDServicePage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, EVDServiceComponent, service);
  }

  renderCadastreFormPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CadastreFormServiceComponent, service);
  }

  renderDefaultServicePage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DefaultServiceComponent, service)
  }

  renderTrendmicroPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, TrendmicroServiceComponent, service);
  }

  renderRgpdPage(service) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, RgpdServiceComponent, service);
  }

}
