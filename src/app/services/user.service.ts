import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';
import { Key } from '../models/key';
import { Generic } from '../models/generic';
import { CompanyUser } from '../models/companyUser';
import { Result } from '../models/result';
import { RecoverPassword } from '../models/recoverPassword';
import { UserPagination } from '../models/userPagination';
import { RegisterCodeRequest } from '../models/registerCodeRequest';
import { UserEmail } from '../models/userEmail';
import { UserEid } from '../models/userEid';
import { UserStaticalData } from './../models/userStaticalData';
import { ImpersonationData } from 'src/app/models/impersonationData';
import { UserProv } from 'src/app/models/userProv';
import { UserList } from 'src/app/models/userlist';
import { UserChildProv } from 'src/app/models/userChildProv';
import { LanguageService } from './language.service';
import { UserConfig } from '../models/userConfig';
import { FamilyUser } from '../models/familyUser';
import { ConfigUserResponse } from '../models/ConfigUserResponse';
import { UserNotificationConfig } from '../models/userNotificationConfig';
import { UserNotification } from '../models/userNotification';
import { LocalService } from './local.service';
import { Service } from '../models/service';
import { WizardStep } from '../models/wizardStep';
import { Evidences } from '../models/evidences';
import { StringUtils } from '../utils/string-utils';
import { UserPost } from '../models/userPost';
import { SidebarService } from '../modules/shared/sidebar-menu.service';
import { UserProfileData } from '../models/userProfile';


class test {
  userId: number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public staticContentUrl = environment.STATIC_CONTENT;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public selSuiteName: string;
  public selSuiteId: number;
  public selSuiteColor: string;
  public selSuiteGradColor: string;
  public users: User[];
  public usersCount: number;
  public menuPhoto = "";
  public companyUser: CompanyUser;
  public result: Result;
  public familyUser: FamilyUser;
  public userNotificationConfig: UserNotificationConfig;
  public userElearningNotification: boolean;
  public userNotifications: UserNotification[];
  public tokenSSO: string;
  public activationToken: string;
  public sendEmail: string = 'false';
  public noActive: boolean = false;
  public email: string;
  public activationTokenCompleteProfile: boolean = false;
  public userServices: { userId: number, services: Service[] };
  public userKeyStorage = new Key();
  public userProfileList: any[] = []
  public userProfileDetailList: any[] = []

  constructor(private http: HttpClient,
    private router: Router,
    private messageService: MessageService,
    private translate: TranslateService,
    private languageService: LanguageService,
    private localService: LocalService) {

    let keepSession = localStorage.getItem('keepSession')
    let setCookies = localStorage.getItem('acceptCookies')
    let tokenSSO = localStorage.getItem('activationToken')
    if (!JSON.parse(keepSession)) {
      var langUser = localStorage.getItem('langUser')
      //localStorage.clear()
      localStorage.setItem('langUser', langUser)
      if (setCookies != null)
        localStorage.setItem('acceptCookies', setCookies)
    }
    if (tokenSSO != null) {
      localStorage.setItem("activationToken", tokenSSO)
    }
    this.currentUserSubject = new BehaviorSubject<User>(this.getLocalStorage('currentUser'));
    if (this.currentUserSubject.value != null) {
      this.currentUserSubject.value.profileImage = this.currentUserSubject.value.profileImage;
      if (this.currentUserSubject.value.profileImage === null) {
        this.menuPhoto = `${this.staticContentUrl}img/profileDefaultMenu.png`
      }
      else {
        this.menuPhoto = this.currentUserValue.profileImage
      }
    }
    this.currentUser = this.currentUserSubject.asObservable();

  }

  setUserKey(data: any) {
    this.userKeyStorage = new Key();
    this.userKeyStorage.newKey = data.newKey;
    this.userKeyStorage.repeatKey = data.repeatKey;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public updateCurrentUser(user: User) {
    this.currentUserSubject.next(user);
  }

  public login(login: User) {
    return this.http.post<User>(environment.apiEndpoint + "api/user", login)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.setLocalStorage('currentUser', user);

          localStorage.removeItem('currentService');
          localStorage.removeItem('suiteColor');
          localStorage.removeItem('suiteGradColor');
          localStorage.removeItem('suiteName');
          localStorage.removeItem('lastFractelItem');
          if (user.profileImage == null) {
            this.menuPhoto = `${this.staticContentUrl}img/profileDefaultMenu.png`
          }
          else {
            this.menuPhoto = user.profileImage
          }
          this.currentUserSubject.next(user);

          if (user.languageCode) {
            this.translate.use(user.languageCode);
            this.languageService.setLanguage(user.languageCode, false);
          }
        }

        return user;
      }));
  }

  public loginSSOToken(login: User) {
    return this.http.post<User>(environment.apiEndpoint + "api/user/loginssotoken", login)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.setLocalStorage('currentUser', user);

          localStorage.removeItem('currentService');
          localStorage.removeItem('suiteColor');
          localStorage.removeItem('suiteGradColor');
          localStorage.removeItem('suiteName');
          localStorage.removeItem('lastFractelItem');
          if (user.profileImage == null) {
            this.menuPhoto = `${this.staticContentUrl}img/profileDefaultMenu.png`
          }
          else {
            this.menuPhoto = user.profileImage
          }
          this.currentUserSubject.next(user);

          if (user.languageCode) {
            this.translate.use(user.languageCode);
            this.languageService.setLanguage(user.languageCode, false);
          }
        }

        return user;
      }));
  }

  logout() {
    let impersonation = ""
    this.tokenSSO != undefined ? impersonation = "true" : impersonation = "false"
    this.logoutUser(impersonation).subscribe();
    const dontShowWebGuidedTourAgain = localStorage.getItem('dontShowWebGuidedTourAgain');
    const dontShowMobileGuidedTourAgain = localStorage.getItem('dontShowMobileGuidedTourAgain');
    this.updateCurrentUser(null);
    localStorage.clear();
    this.tokenSSO = "";
    this.activationToken = "";
    if (dontShowWebGuidedTourAgain) localStorage.setItem('dontShowWebGuidedTourAgain', dontShowWebGuidedTourAgain);
    if (dontShowMobileGuidedTourAgain) localStorage.setItem('dontShowMobileGuidedTourAgain', dontShowMobileGuidedTourAgain);
    if (!dontShowWebGuidedTourAgain)  {
      localStorage.removeItem('tourGuideWebOpen');
      localStorage.removeItem('tourGuideMobileOpen');
    }

    this.router.navigate(['']);
  }

  public localLogout() {
    // remove user from local storage to log user out
    let setCookies = localStorage.getItem('acceptCookies')
    // var langUser = localStorage.getItem('langUser')
    let activationToken = localStorage.getItem('activationToken')

    // localStorage.setItem('langUser', langUser)
    if (setCookies != null)
      localStorage.setItem('acceptCookies', setCookies)
    if (activationToken != null) {
      localStorage.setItem('activationToken', activationToken)
      this.activationToken = activationToken
    }

    this.currentUserSubject.next(null);
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/"]);

    window.location.reload();
  }

  public updateUser(user: User) {
    return this.http.put<User>(environment.apiEndpoint + "api/user", user)
      .pipe(map(respUser => {
        // login successful if there's a jwt token in the response
        if (!respUser.token)
            respUser.token = user.token ? user.token : '';

        if (respUser && respUser.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.setLocalStorage('currentUser', respUser);
          this.currentUserSubject.next(respUser);
        }
        return respUser;
      }));
  }

  public activateUser(user: User) {
    return this.http.put<User>(environment.apiEndpoint + "api/user?tokensso=" + this.activationToken, user)
      .pipe(map(user => {

        // login successful if there's a jwt token in the response
        if (user && user.token) {

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          //user.lastPreviousAccessDate = new Date("2022-04-11T15:20:18.379841")
          this.setLocalStorage('currentUser', user);
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  public updateFullProfile(user: any) {
    return this.http.put(environment.apiEndpoint + "api/user/updateFullProfile", user).toPromise();
  }
  public updateProfile(user: any) {
    return this.http.put(environment.apiEndpoint + "api/user/updateProfile", user).toPromise();
  }

  //ADMIN


  public async getUserNotificationConfig(userId: number = 0) {
    let params = new HttpParams();
    params = params.set('userId', userId.toString());
    return this.http.get<UserNotificationConfig>(environment.apiEndpoint + "api/user/notification_config", { params }).toPromise().then(result => { this.userNotificationConfig = result });
  }

  setElearningNotification(data: UserPost) {
    if (data) {
      this.userElearningNotification = data.state === 1 ? true : false;
    } else {
      this.userElearningNotification = false;
    }
  }

  getElearningNotificationData() {
    return StringUtils.deepClone(this.userElearningNotification);
  }

  public getElearningNotification() {
    return this.http.get(environment.apiEndpoint + "api/UserPost");
  }

  public updateElearningNotification(userPostBody: UserPost) {
    return this.http.post(environment.apiEndpoint + "api/UserPost", userPostBody);
  }

  public updateUserNotificationConfig(userNotificationConfig: UserNotificationConfig) {
    return this.http.post<boolean>(environment.apiEndpoint + "api/user/notification_config", userNotificationConfig)
  }

  public async getUserNotifications() {
    return this.http.get<UserNotification[]>(environment.apiEndpoint + "api/user/notifications").toPromise().then(result => { this.userNotifications = result });
  }

  public async readUserNotifications() {
    let params = new HttpParams();
    //params = params.set('userId', userId.toString());
    return this.http.put<boolean>(environment.apiEndpoint + "api/user/read_user_notifications", null, { params }).toPromise();
  }

  public async readSupportNotifications() {
    let params = new HttpParams();
    //params = params.set('userId', userId.toString());
    return this.http.put<boolean>(environment.apiEndpoint + "api/NotificationSupport", null, { params }).toPromise();
  }

  public async readUserChildsNotifications() {
    let params = new HttpParams();
    //params = params.set('userId', userId.toString());
    return this.http.put<boolean>(environment.apiEndpoint + "api/user/read_user_childs_notifications", null, { params }).toPromise();
  }
  public async hideUserNotifications() {
    let params = new HttpParams();
    //params = params.set('userId', userId.toString());
    return this.http.put<boolean>(environment.apiEndpoint + "api/user/hide_user_notifications", null, { params }).toPromise();
  }
  public async hideUserChildsNotifications(userId: number = 0) {
    let params = new HttpParams();
    params = params.set('userId', userId.toString());
    return this.http.put<boolean>(environment.apiEndpoint + "api/user/hide_user_childs_notifications", null, { params }).toPromise();
  }

  public async getFamilyUser() {
    let params = new HttpParams();

    //if (userId > 0)
    //  params = params.set('userId', userId.toString());

    return this.http.get<FamilyUser>(environment.apiEndpoint + "api/user/familyUsers", { params }).toPromise().then(result => { this.familyUser = result });
  }

  public async getUserServices(userId: number) {
    let params = new HttpParams();
    params = params.set('userId', userId.toString());
    return this.http.get<Service[]>(environment.apiEndpoint + "api/user/activeservices", { params }).toPromise();
  }


  public async createUser(user: User) {
    return this.http.post(environment.provisionEndpoint + "api/user/adm", user).toPromise().then(
      result => {
        this.messageService.add(this.translate.instant('COMP_USER.MESSAGE.OK'), "ok")
      },
      err => {
        this.messageService.add(this.translate.instant('COMP_USER.MESSAGE.ERR'), "error")
      });
  }

  public updateUserByAdminCompany(user: UserList) {
    return this.http.put(environment.apiEndpoint + "api/user/admCompany", user).toPromise();
  }

  public async updateUserKey(key: Key) {
    return this.http.put(environment.apiEndpoint + "api/user/key", key).toPromise();
  }

  public async updateUserKeyActivation(key: Key) {
    return this.http.put(environment.apiEndpoint + "api/user/key?tokenSSO=" + this.activationToken, key).toPromise();
  }

  public async deleteUser(user: User, key: string) {
    return this.http.put(environment.provisionEndpoint + "api/user/delete?key=" + key, user).toPromise();
  }

  public async GetExistUserEid(user: UserEid) {
    return this.http.post<boolean>(environment.apiEndpoint + "api/user/existseid", user).toPromise();
  }

  public async decodeRegisterCode(user: UserEid) {
    let params = new HttpParams();
    params = params.set('partnerId', user.partnerId.toString());
    params = params.set('registercode', user.eid.toString());
    return this.http.get<string>(environment.apiEndpoint + "api/user/decoderegistercode", { params }).toPromise();
  }

  public decodeRegisterCodeObservable(user: UserEid) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let params = new HttpParams();
    params = params.set('partnerId', user.partnerId.toString());
    params = params.set('registercode', user.eid.toString());
    return this.http.get(environment.apiEndpoint + "api/user/decoderegistercode", { headers ,params , responseType: 'text' }, )
  }

  public async checkRegCodeActivated(registerCode: string, partnerId: string) {
    let params = new HttpParams();
    params = params.set('partnerId', partnerId);
    params = params.set('registercode', registerCode);
    return this.http.get<boolean>(environment.apiEndpoint + "api/user/checkregcodeactivated", { params }).toPromise();
  }

  public getUserSuites(partnerCode: string, userId: number): Promise<Generic[]> {
    let params = new HttpParams();
    params = params.set('partnerCode', partnerCode);
    params = params.set('userId', userId.toString());
    return this.http.get<Generic[]>(environment.apiEndpoint + "api/suite/user/suites", { params }).toPromise();
  }

  public recoverPassword(email: string, partId: string, eid: string) {
    let params = new RecoverPassword();
    params.email = email;
    params.partId = Number(partId);
    params.eid = eid;
    return this.http.post<boolean>(environment.apiEndpoint + "api/user/recoverPassword", params);
  }
  public async updateUserKeyPassword(key: Key) {
    return this.http.put(environment.apiEndpoint + "api/user/keyPassword", key).toPromise();
  }

  public registerCode(request: RegisterCodeRequest) {
    return this.http.post<Result>(environment.apiEndpoint + "api/user/registercode", request);
  }

  public createCompanyUser(user: User, key: string): Promise<any> {
    if (user.typeUser == "1") {
      let userChildProv = new UserChildProv();
      userChildProv.name = user.name;
      userChildProv.surname = user.surname;
      userChildProv.email = user.email;
      userChildProv.eid = user.eid;
      userChildProv.address = user.adress;
      userChildProv.suites = user.userSuites.map(us => us.code);
      userChildProv.city = user.city;
      userChildProv.postalcode = user.postalcode;
      userChildProv.phone = user.phone;
      userChildProv.phone2 = user.phone2;
      userChildProv.profileImage = user.profileImage;
      userChildProv.parentEid = user.parentEid;
      userChildProv.parentEmail = user.parentEmail;
      userChildProv.parentCompanyIdentification = user.parentCompanyIdentification;
      userChildProv.adminUserId = user.adminUserId;
      userChildProv.mobilePhone = user.mobilePhone;
      userChildProv.countryCode = user.countryCode;
      userChildProv.country = user.country;
      userChildProv.cif = user.cif;
      return this.http.post<Result>(environment.provisionEndpoint + "api/user/userchild?key=" + key, userChildProv).toPromise();
    }
    else {
      let userProv = new UserProv();
      userProv.name = user.name;
      userProv.surname = user.surname;
      userProv.surname2 = user.surname2;
      userProv.email = user.email;
      userProv.suites = user.userSuites.map(us => us.code);
      userProv.eid = user.eid;
      userProv.mobilePhone = user.mobilePhone;
      userProv.lote = user.lote;
      userProv.cif = user.cif;
      userProv.companyIdentification = user.companyIdentification;
      userProv.companyName = user.companyName;
      userProv.adress = user.companyAddress;
      userProv.companyPhones = user.companyPhones;
      userProv.companyAuthorizedPhones = user.companyAuthorizedPhones;
      userProv.companyAuthorizedFullname = user.companyAuthorizedFullname;
      userProv.companyMaxNumLicensesAllowed = +user.companyMaxNumLicensesAllowed;
      userProv.companyAddress = user.companyAddress;
      userProv.expirationDate = user.expirationDate;
      let users: Array<UserProv> = [userProv];
      return this.http.post<Array<Result>>(environment.provisionEndpoint + "api/user?key=" + key, users).toPromise().then(result => result[0]);
    }
  }


  public async getCompanyUsers(): Promise<any> {
    let params = new HttpParams();
    return this.http.get<CompanyUser>(environment.apiEndpoint + "api/user/userchild").toPromise().then(result => { this.companyUser = result });
  }

  public async updateUserConfig(userconfig: UserConfig): Promise<ConfigUserResponse> {
    return this.http.post<ConfigUserResponse>(environment.apiEndpoint + "api/user/userConfig", userconfig).toPromise();
  }

  public getContracts(token: string): Promise<string> {
    let params = new HttpParams();
    params = params.set('token', token);
    return this.http.get<string>(environment.apiEndpoint + "api/User/getuuids", { params }).toPromise();
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

  setLocalStorage(key, data) {
    this.localService.setJsonValue(key, data);
  }

  public async getPdf(id: string) {
    let params = new HttpParams();
    params = params.set('AcunetixId', id);
    return this.http.get(environment.apiEndpoint + "api/Acunetix/getfile", { params, responseType: "text" }).toPromise()

  }

  public async getCyberScoringPdf(id: string) {
    let params = new HttpParams();
    params = params.set('cyberscoringId', id);
    return this.http.get(environment.apiEndpoint + "api/Cyberscoring/getpdffile", { params, responseType: "text" }).toPromise()
  }

  public loginPartner(data) {
    return this.http.get(environment.apiEndpoint + "api/user", data).toPromise();
  }

  public logoutUser(val) {
    if (val == "true") {
      return this.http.post(environment.apiEndpoint + "api/User/logout", { impersonation: val, SendEmail: this.sendEmail });
    } else {
      return this.http.post(environment.apiEndpoint + "api/User/logout", { impersonation: val });
    }

  }

  public getusertokendata(token, recover?) {
    if (recover) {
      let params = new HttpParams();
      params = params.set('isRecoverPassword', recover);
      return this.http.get(environment.apiEndpoint + "api/User/getusertokendata?tokensso=" + token, { params }).toPromise();
    } else {
      return this.http.get(environment.apiEndpoint + "api/User/getusertokendata?tokensso=" + token).toPromise();
    }

  }

  processActivationServices() {
    return new Promise(resolve => {
      this.getActivationServices().then(
        result => {
          let finalized: boolean = true;
          var tempData = result as any;
          if (localStorage.getItem("skipWizard") === null) {
            if (tempData.length > 0) {
              for (let i = 0; i < tempData.length; i++) {
                if (tempData[i].finalized == false) {
                  finalized = false;
                  break;
                }
              }
            }

            if (!finalized) {
              localStorage.setItem('skipWizard', 'true');
              resolve({ finalized : false })
            } else {
              localStorage.setItem('skipWizard', 'false');
              resolve({ finalized : true })
            }
          } else {
            resolve({ finalized : true })
          }
        }
      );
    })

  }

  public async getActivationServices() {
    return this.http.get<WizardStep>(environment.apiEndpoint + "api/User/GetWizardAllStatus").toPromise();
  }

  public getFamilyProfiles(userId: number) {
    return this.http.get(environment.apiEndpoint + `api/User/FamilyProfiles?userId=${userId}`).toPromise();
  }

  public addUserProfile(dto: any) {
    return this.http.post(environment.apiEndpoint + `api/User/userProfile`, dto).toPromise();
  }

  public editUserProfile(dto: UserProfileData) {
    return this.http.put(environment.apiEndpoint + `api/User/userProfile`, dto).toPromise();
  }

  public deleteUserProfile(dto: UserProfileData) {
    return this.http.put(environment.apiEndpoint + `api/User/delUserProfile`, dto).toPromise();
  }

  public getUserProfileData(userProfileId) {
    return this.http.get(environment.apiEndpoint + `api/User/UserProfileData?userProfileId=${userProfileId}`).toPromise();
  }

  public getUserOrangeExpert(data: any){
    return this.http.post<any>(environment.apiEndpoint +`api/User/loginOrangeTuExperto`,data )
  }

}
