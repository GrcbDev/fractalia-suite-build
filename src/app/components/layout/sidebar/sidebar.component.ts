import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { EmitService } from 'src/app/services/emit.service';
import { PartnerService } from 'src/app/services/partner.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../header-integrated/shared/notification.service';
import { RgpdService } from 'src/app/modules/home/rgpd-service/shared/rgpd.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebarContent') sidebarContent!: ElementRef;
  @Input() logo: string;

  menuList: any[] = [];
  public staticContentUrl = environment.STATIC_CONTENT;
  public defaultPhoto = `${this.staticContentUrl}img/profileDefaultMenu.png`;
  previusMenuSelected :any;
  public currentUser: User;
  public currentUserSubscription: Subscription;
  public showBasicUserItems: boolean;
  validationProfile = false;
  showUnitFamily = false;
  constructor(
    private renderer: Renderer2,
    public router: Router,
    public userService: UserService,
    public suiteService: SuiteService,
    private partnerService: PartnerService,
    private sidebarService: SidebarService,
    public notificationService: NotificationService,
    private emitService: EmitService,
    private rgpdService: RgpdService,
  ) {

    this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
      this.currentUser = user
    });

    window.addEventListener("resize", e => {
      if(document.body.clientWidth >= 751) {
        document.getElementById('sidebar-toogle').classList.add("sidebar--show")
        this.notificationService.setSidebarToogle(true);
      }
      if(document.body.clientWidth < 751) {
        document.getElementById('sidebar-toogle').classList.remove("sidebar--show")
        this.notificationService.setSidebarToogle(false);
      }
    });
  }

  ngOnInit() {
    this.sidebarConfig();
    this.watchRefreshSidebar();

    this.emitService.rechargeSidebar.subscribe((bool: boolean) => {
      this.sidebarConfig();
    });
  }

  sidebarConfig(reload = false) {
    this.menuList = this.sidebarService.getMenu();
    if (this.currentUser.roleId === 4 || this.currentUser.roleId === 7 || this.currentUser.roleId === 3 || this.currentUser.roleId === 2) {
      this.showBasicUserItems = false;
    }
    this.showUnitFamily = this.suiteService.isUnitFamily;

    this.sidebarService.hasFamilyMenu = this.showUnitFamily;


    if(this.suiteService.suites && this.suiteService.suites.length) {
      this.userService.selSuiteId = this.suiteService.suites[0].id;
      this.userService.selSuiteName = this.suiteService.suites[0].name
      this.showBasicUserItems = true;
    }

    if(this.userService && this.userService.currentUserValue && this.userService.currentUserValue.passwordChanged && this.showBasicUserItems && this.userService.currentUserValue.inJira){
      this.validationProfile = true;
      this.sidebarService.hasHomeMenu = true;
      this.sidebarService.hasServicesMenu = this.menuList && this.menuList.length > 0;
    }

    if(this.partnerService.partner.loginType === 2 && this.userService && this.userService.currentUserValue && this.userService.currentUserValue.passwordChanged && this.showBasicUserItems && this.userService.currentUserValue.checkTermsAcceptDate) {
      this.validationProfile = true;
      this.sidebarService.hasHomeMenu = true;
      this.sidebarService.hasServicesMenu = this.menuList && this.menuList.length > 0;
    }
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((val) => {
      if (val && val instanceof NavigationStart) {
        if(document.body.clientWidth < 751) {
          const toogle = document.getElementById('sidebar-toogle');
          if(toogle) {
            toogle.classList.remove("sidebar--show")
            this.notificationService.setSidebarToogle(false);
          }
        }
      }
    });

    this.renderer.listen('window', 'click', (e: Event) => {
      if(document.body.clientWidth < 751) {
        if (e.target !== document.getElementById('button-sidebar') &&  !this.sidebarContent.nativeElement.contains(e.target) ) {
          const toogle = document.getElementById('sidebar-toogle');
          if(toogle) {
            toogle.classList.remove("sidebar--show")
            this.notificationService.setSidebarToogle(false);
          }
        }
      }
    });

  }

  clickItemMenu(menuItem: any) {
    if( this.menuList.length >= 2) {
      const menuOpen = this.menuList.find(x => x.showChildren == true);
      const isSameMenuOrIsOpen = menuOpen ? menuItem.id === menuOpen.id : false;
      if(!isSameMenuOrIsOpen){
        this.closeAnotherMenus();
      }
      this.toogleItemMenu(menuItem);
    } else{
      this.toogleItemMenu(menuItem);
    }
  }


  goToRGPChange(){
    this.rgpdService.emitReload(true);
  }

  toogleItemMenu(menuItem){
    if(menuItem && menuItem.children) {
      menuItem.showChildren = !menuItem.showChildren;
    }
  }

  closeAnotherMenus() {
    this.menuList.forEach(x => x.showChildren = false);
  }

  handleLogout() {
    this.sidebarService.handleLogout();
  }

  private watchRefreshSidebar() {
    this.sidebarService.reloadSidebar$
      .pipe(
        filter(data => !!data),
        tap(data => this.sidebarConfig(true))
      )
      .subscribe();
  }

}
