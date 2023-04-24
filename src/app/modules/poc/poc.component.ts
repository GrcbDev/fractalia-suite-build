import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { ImageUtils } from 'src/app/utils/ImageUtils';
import { environment } from 'src/environments/environment';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { FamilyUnitService } from './shared/family-unit.service';
import { FAMILY_UNIT_MAX_PROFILES } from './shared/famiy-unit-const';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {
  public slastPreviousAccessDate: string;
  loading = true;
  public staticContentUrl = environment.STATIC_CONTENT;
  items: any[] = [];
  suiteName : string;
  hideGreeting : boolean;
  // TODO: llamar a un servicio y usar esta variable
  familyUnitMaxProfiles = FAMILY_UNIT_MAX_PROFILES;

  totalProfiles = 0;
  constructor(
    public suiteService: SuiteService,
    private CDKmodalService: CDKModalService,
    public userService: UserService,
    private familyUnitService: FamilyUnitService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.slastPreviousAccessDate =
    this.userService.currentUserValue.lastPreviousAccessDate
      .toString()
      .indexOf("Z") >= 0
      ? this.userService.currentUserValue.lastPreviousAccessDate.toString()
      : this.userService.currentUserValue.lastPreviousAccessDate.toString() +
        "Z";
    this.getNameSuiteAndhideGreeting();
    this.loadUnitFamilyInfo();
    this.familyUnitService.init();
    this.watchModalChange();
    this.totalProfiles = this.familyUnitMaxProfiles + 1; // + el perfil principal
  }

  getNameSuiteAndhideGreeting(){
    this.suiteService.suites.map(e => {
      this.suiteName = e.name
      this.hideGreeting = e.hideGreeting
    })
  }

  addProfile(){
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.CDKmodalService.open(AddProfileComponent, config);
  }

  editProfile(item: any) {
    if(item.isOwnerAccount) {
      this.router.navigate(['/profile']);
    } else {
      const config = {
        modalClass: 'ds-modal-sm',
        position: 'center',
        data: item
      };
      this.CDKmodalService.open(EditProfileComponent, config);
    }
  }

  deleteProfile(item: any) {
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
      data: item
    };
    this.CDKmodalService.open(DeleteProfileComponent, config);

  }

  openDetail(item: any) {
    const config = {
      modalClass: ['ds-modal-xl', 'ds-p-0','ds-modal-height'],
      position: 'center',
      data: item
    };
    this.CDKmodalService.open(ProfileInfoComponent, config);
  }


  loadUnitFamilyInfo() {
    const currentUser = this.userService.currentUserValue;
    this.userService.userProfileList = [];
    this.userService
      .getFamilyProfiles(currentUser.id)
      .then((resp: any) => {
            this.loading = false;
            const payload: any = {
              userProfileId: 0,
              userId: currentUser.id,
              name: currentUser.name,
              surname: currentUser.surname,
              email: currentUser.email,
              isOwnerAccount: true,

            };
            if(currentUser.profileImage) {
              payload.photo = currentUser.profileImage;
            }
            this.userService.userProfileList.push(payload)
            resp.forEach(element => {
              element.isOwnerAccount  = false;
              if(element.photo) element.photo = ImageUtils.noCacheImagen(element.photo);
              this.userService.userProfileList.push(element)
            })
            this.items =  this.userService.userProfileList;
      });
  }

  watchModalChange(){
    this.familyUnitService.familyUnitChange$
      .pipe(
        filter(data => !!data),
        tap(() => this.loadUnitFamilyInfo()),
      )
      .subscribe();
  }

}
