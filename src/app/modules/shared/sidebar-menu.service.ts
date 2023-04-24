import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject, forkJoin } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { Generic } from "src/app/models/generic";
import { Service } from "src/app/models/service";
import { Suite } from "src/app/models/suite";
import { User } from "src/app/models/user";
import { ServicesService } from "src/app/services/services.service";
import { SuiteService } from "src/app/services/suite.service";
import { UserService } from "src/app/services/user.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [];
  previusActive: any;
  public suites: Suite[];
  public userServices: Service[];
  userServicesFormated: any[];
  public userCategories: Generic[];
  userMenuOptions: any;

  menuList: any[] = [];

  reloadJumbotron$: BehaviorSubject<any> = new BehaviorSubject(null);

  reloadSidebar$: BehaviorSubject<any> = new BehaviorSubject(null);
  hasHomeMenu: boolean = false;
  hasFamilyMenu: boolean = false;
  hasServicesMenu: boolean = false;
  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private suiteService: SuiteService,
    private translate: TranslateService
  ) {
  }

  emitReloadJumbotrom(value?: any) {
    this.reloadJumbotron$.next(value);
  }

  emitReloadSidebar(value?: any) {
    this.reloadSidebar$.next(value);
  }

  resetMenu() {
    this.menuList = [];
  }

  handleLogout() {
    this.resetMenu();
    this.userService.logout();
  }

  setActiveRouteByUrl(url: string) {
    if (this.previusActive && Object.keys(this.previusActive).length) {
      this.menu[this.previusActive.index].active = false;
    } else {
      this.findAndSetRouteInactive();
    }
    const parameter = {
      key: 'route',
      value: url,
    };
    const findUrl = this.findByParameters(this.menu, parameter);
    if (findUrl && Object.keys(findUrl).length > 0) {
      this.setActiveRouteRecursive(findUrl);
    }
  }

  findAndSetRouteInactive() {
    const findIndexActive = this.menu.findIndex(x => x.active === true);
    if (findIndexActive !== -1) {
      this.previusActive = this.menu[findIndexActive];
      this.menu[findIndexActive].active = false;
    }
  }

  setActiveRouteRecursive(itemMenu: any) {
    if (itemMenu && itemMenu.parentId) {
      const parameter = {
        key: 'id',
        value: itemMenu.parentId,
      };
      const parent = this.findByParameters(this.menu, parameter);
      if (parent && Object.keys(parent).length > 0) {
        this.setActiveRouteRecursive(parent);
      }
    } else {
      this.menu[itemMenu.index].active = true;
      this.previusActive = itemMenu;
    }
  }


  findByParameters(source: any, parameter: any) {
    for (let index = 0; index < source.length; index++) {
      const element = source[index];
      if (element[parameter.key] === parameter.value) {
        element.index = index;
        return element;
      }
      if (element && element.children && element.children.length) {
        const subResult = this.findByParameters(element.children, parameter);
        if (subResult) {
          return subResult;
        }
      }
    }
  }

  getUserSuites() {
    let params = new HttpParams();
    let langUser = localStorage.getItem('langUser');
    params = params.set('lan', langUser);
    return this.httpClient.get(environment.apiEndpoint + "api/suite/user_suite", { params });
  }


  getPartner(id: number) {
    let params = new HttpParams();
    params = params.set('id', id.toString());
    return this.httpClient.get<any>(environment.apiEndpoint + "api/partner/get", { params });
  }

  getUserCategories(suiteId, partnertId) {
    let params = new HttpParams();
    params = params.set('suiteId', suiteId.toString());
    params = params.set('partnerId', partnertId.toString());
    let langUser = localStorage.getItem('langUser');
    params = params.set('lan', langUser);
    return this.httpClient.get(environment.apiEndpoint + "api/service/user/category", { params });
  }


  getUserServices(suiteId, partnertId) {
    let params = new HttpParams();
    params = params.set('suiteId', suiteId.toString());
    params = params.set('partnerId', partnertId.toString());
    let langUser = localStorage.getItem('langUser');
    params = params.set('lan', langUser);
    return this.httpClient.get(environment.apiEndpoint + "api/user/services", { params });
  }

  getUserServicesMenu(suiteId, partnertId) {
    let params = new HttpParams();
    params = params.set('suiteId', suiteId.toString());
    params = params.set('partnerId', partnertId.toString());
    return this.httpClient.get(environment.apiEndpoint + "api/menu/menuservices", { params });
  }


  getUserServicesDashboard(suiteId, partnertId) {
    let params = new HttpParams();
    params = params.set('suiteId', suiteId.toString());
    params = params.set('partnerId', partnertId.toString());
    return this.httpClient.get(environment.apiEndpoint + "api/menu/dashboardservices", { params });
  }

  getChatInfo(serviceId, suiteId, partnertId) {
    let params = new HttpParams();
    params = params.set('partnersuiteid', suiteId.toString());
    params = params.set('partnerid', partnertId.toString());
    params = params.set('serviceid', serviceId.toString());
    return this.httpClient.get(environment.apiEndpoint + "api/menu/chatservice", { params });
  }

  getJumbotromInformation() {
    return this.httpClient.get(environment.apiEndpoint + "api/user/jumbotron");
  }

  getServiceInfo(serviceId, partnertId) {
    let params = new HttpParams();
    params = params.set('partnerid', partnertId.toString());
    params = params.set('serviceid', serviceId.toString());
    return this.httpClient.get(environment.apiEndpoint + "api/menu/infoservice", { params });
  }

  getServiceInfoByCode(serviceCode: string) {
    let params = new HttpParams();
    params = params.set('serviceCode', serviceCode);
    return this.httpClient.get(environment.apiEndpoint + "api/menu/getServiceByCode", { params });
  }

  callMultipleAPIToSidebarMenu() {
    const identityToken = this.userService.currentUserValue;
    if (identityToken) {
      return new Promise(resolve => {
        forkJoin([
          this.getUserSuites(),
          this.getPartner(identityToken.partnerId)
        ])
          .pipe(
            tap((response: any[]) => {
              if (response[0] && response[0].length) {
                this.suiteService.suites = response[0];
                this.userService.selSuiteId = response[0][0].id;
                this.userService.selSuiteName = response[0][0].name;
                this.suiteService.isUnitFamily = response[0][0].suiteType == 1;
                localStorage.setItem('maxCardsByUser', response[0][0].maxCardsByUser.toString());
                localStorage.setItem('maxIdentitiesByUser', response[0][0].maxIdentitiesByUser.toString());
              }
              if (response[1] && Object.keys(response[1]).length) {
                var tempUser = new User();
                tempUser = Object.assign({}, this.userService.currentUserValue);
                tempUser.partnerName = response[1].name;
                this.userService.updateCurrentUser(tempUser)
              }
            }),
            switchMap(() =>
              forkJoin([
                // this.getUserCategories(this.userService.selSuiteId, identityToken.partnerId),
                this.getUserServicesMenu(this.userService.selSuiteId, identityToken.partnerId),
                // this.getUserServices(this.userService.selSuiteId, identityToken.partnerId),
              ])
                .pipe(
                  tap((response: any) => {
                    if (response[0] && response[0].length) {
                      this.userMenuOptions = response[0];
                    }
                    // if(response[0] && response[0].length) {
                    //   this.userCategories = response[0];
                    // }
                    // if(response[1] && Object.keys(response[1]).length) {
                    //   this.userServices = response[1];
                    //   this.serviceServices.processUsers(response[1]);
                    //   this.formatServicesByCategory()
                    // }
                  }),
                  // tap(() => this.menuList = this.initMenu()),
                  tap(() => this.processUserMenuItems()),
                  tap(() => this.processUserServices()),
                  tap(() => resolve(true))
                )
            ),
          ).subscribe();
      });

    }

  }


  initMenu() {
    return [
      {
        id: 0,
        name: this.translate.instant("MY_PROFILE"),
        route: 'profile',
        icon: 'icon-home',
        parent: true,
        active: false
      },
      {
        id: 1,
        name: this.translate.instant("HOME"),
        route: 'home',
        icon: 'icon-home',
        parent: true,
        active: false
      },
      {
        id: 2,
        name: this.translate.instant("CONFIGURATION"),
        route: 'user-managment',
        icon: 'icon-users',
        parent: true,
        active: false
      },
    ];
  }


  processMenuItems() {
    const menuItems = this.userCategories.map(x => {
      const itemMenu: any = {
        id: x.id,
        name: x.desc,
        route: '',
        icon: x.icon,
        parent: true,
        showChildren: false,
        active: false,
      };
      const findServices = this.userServices.filter(item => item.categoryId == x.id);
      itemMenu.children = findServices.map(s => {
        const child = {
          id: s.id,
          name: s.name,
          route: 'service/' + s.code,
          icon: s.icon,
          parentId: x.id,
          parent: false,
          active: false
        };
        return child;
      });
      return itemMenu;
    });
    this.menuList = this.menuList.concat(menuItems);
  }

  getMenu() {
    return this.menuList;
  }

  formatServicesByCategory() {
    this.userServicesFormated = this.userServices.map(item => {
      const findCategory = this.userMenuOptions.find(x => x.id == item.categoryId);
      if (findCategory) {
        item.category = findCategory.name;
        item.categoryIcon = findCategory.icon;
      }
      return item;
    })
  }

  processUserMenuItems() {
    let menuItems;

    if(this.userMenuOptions && this.userMenuOptions.length > 0) {
      menuItems = this.userMenuOptions.map(x => {
        const itemMenu: any = {
          id: x.id,
          name: x.name,
          route: '',
          icon: x.icon,
          parent: true,
          showChildren: false,
          active: false,
          code: x.code
        };
        itemMenu.children = x.services.map(s => {
          const child = {
            id: s.id,
            name: s.name,
            route: 'service/' + s.code,
            icon: s.icon,
            parentId: x.id,
            parent: false,
            active: false,
            code: s.code
          };
          return child;
        });
        return itemMenu;
      });

      /// Se filtran los datos por nombre si llegan repetidos.
      if (menuItems && menuItems.length > 0) {
        for (let index = 0; index < menuItems.length; index++) {
          let child = [];
          const children = menuItems[index].children;
          if (children && children.length > 0) {
            for (let index2 = 0; index2 < children.length; index2++) {
              const c = children[index2];
              const e = child.filter((w: any) => w.code.trim().toLowerCase() === c.code.trim().toLowerCase());
              if (e && e.length === 0) {
                child.push(c);
              }
            }
          }
          menuItems[index].children = child;
        }
      }
    } else {
      menuItems = [];
    }

    this.menuList = this.menuList.concat(menuItems);
  }

  processUserServices() {
    let abc = [];

    if(this.userMenuOptions && this.userMenuOptions.length > 0) {
      this.userMenuOptions.forEach(x => {
        const servicesFormatted = x.services.map(s => {
          s.categoryId = x.id;
          s.category = x.name;
          return s;
        });
        abc = abc.concat(servicesFormatted);
      });
    }

    this.userServicesFormated = abc;
  }

}

