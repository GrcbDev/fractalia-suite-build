import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { PartnerService } from 'src/app/services/partner.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { NotificationService } from '../header-integrated/shared/notification.service';
import { AppInstallerService } from 'src/app/services/app-installer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public currentUser: User;
  public currentUserSubscription: Subscription;
  public loginType: number;
  public messageService: MessageService;

  constructor(public userService: UserService,
    public router: Router,
    public partnerService: PartnerService,
    public notificationService: NotificationService,
    public appInstallerService: AppInstallerService
  ) {

    this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
      this.currentUser = user
    });
  }

  ngAfterViewInit() {

  }


  async ngOnInit() {
    if (this.currentUser)
    {
      this.loginType = this.partnerService.partner.loginType;
      if (this.loginType == 2 && !this.currentUser.isAdminUserId && (this.currentUser.email == undefined || this.currentUser.email == null || this.currentUser.email == "")) {
        this.messageService.add("Recomendación: establezca un correo electónico con el fin de establecer un canal de notificaciones, por favor, vaya a su perfil y añádalo.", "info");
      }

    }
  }

  ngAfterContentInit() {}

  logout() {
    this.userService.logout();
  }

  toogleNotificacion()  {
    this.notificationService.toogleNotification()
  }

  openSidebar() {
    const sidebarId = document.getElementById("sidebar-toogle");

    if(sidebarId) {
      const body = document.getElementById('main-body');
      if(this.notificationService.sidebarToogle && body) {
        body.classList.remove("modal-open");
      } else {
        body.classList.add("modal-open");
      }
      this.notificationService.toogleSidebarToogle();
      sidebarId.classList.toggle("sidebar--show");

    }
  }



}

