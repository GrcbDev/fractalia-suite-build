import { Component, OnInit, ViewChild } from '@angular/core';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { PartnerService } from 'src/app/services/partner.service';
import { ActivateUserWays } from './shared/activate-user-ways';
import { InOneClickComponent } from './in-one-click/in-one-click.component';
import { ByDefaultComponent } from './by-default/by-default.component';
import { Router } from '@angular/router';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss'],
})

export class ActivateUserComponent implements OnInit {
  @ViewChild(RenderComponentDirective, { static: false } as any)
  directiveContainer: RenderComponentDirective;
  isloading = true;
  //public user: User;
  logo: string;
  textStep: string = 'default';
  loginUrl: any;
  constructor(
    private dynamicRenderComponentService: DynamicRenderComponentService,
    public userService: UserService,
    private sidebarService: SidebarService,
    private router: Router,
    public partnerService: PartnerService,
  ) {
    //this.user = Object.assign({}, this.userService.currentUserValue);
   }

  ngOnInit() {
    this.logo = this.partnerService.partner.logotipo;
    //this.validateUserInLocalStorage();

  }

  ngAfterViewInit(): void {
    this.validateUserStatus();
  }

  // validateUserInLocalStorage() {
  //   const itemToken = localStorage.getItem("activationToken");
  //   this.userService.activationToken = itemToken ? itemToken : null;
  // }

  validateUserStatus(){
    // this.userService.getusertokendata(this.userService.activationToken).then(
    //   (result: any) => {
    //     this.user = Object.assign({}, result as User);
    //     if (result && result.checkTermsAcceptDate == true){
    //       this.router.navigate(['/']);
    //     }else{
    //       if(result && result.activeUsers1Click) {
    //         this.loadComponentByBussinessStrategy(ActivateUserWays.OneClick, result)
    //       } else {
    //         this.loadComponentByBussinessStrategy(ActivateUserWays.TwoSteps, result)
    //       }
    //     }
    //     this.isloading = false;
    //   },
    //   err => {
    //     this.isloading = false;
    //     console.log("Error: ", err)
    //   });

    const activationToken = localStorage.getItem("activationToken");
    if (activationToken) {
      this.userService.getusertokendata(activationToken).then(
        (result: any) => {
          if (result && result.activeUsers1Click) {
            this.loadComponentByBussinessStrategy(ActivateUserWays.OneClick, result)
          } else if (result) {
            this.loadComponentByBussinessStrategy(ActivateUserWays.TwoSteps, result)
          }
          this.isloading = false;
        },
        err => {
          this.isloading = false;
          console.log("Error: ", err)
        });
    } else{
      this.sidebarService.handleLogout();
    }
  }


  loadComponentByBussinessStrategy(activateUserWay: any, user?: User) {
    switch (activateUserWay) {
      case ActivateUserWays.OneClick:
        this.renderOneClickPage(user);
        break;
      case ActivateUserWays.TwoSteps:
        this.renderTwoStepsPage(user);
        break;
      default:
        break;
    }
  }

  renderOneClickPage(user){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, InOneClickComponent, user);
  }

  renderTwoStepsPage(user){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ByDefaultComponent, user);
  }

}







