import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Service } from '../models/service';
import { UserService } from './user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Generic } from '../models/generic';
import { LanguageService } from './language.service';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';
import { User } from '../models/user';
import { PartnerServiceLan } from '../models/partnerServiceLan';
import { PartnerServiceConfig } from '../models/partnerServiceConfig';
import { TagLan } from '../models/tagLan';
import { LocalService } from './local.service';
import { DigitalContact } from '../models/digitalContact';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private currentServicesSubject: BehaviorSubject<Service[]>;
  public currentServices: Observable<Service[]>;
  public suiteId: number;
  public services: Service[];
  public userServices: Service[];
  public userCategories: Generic[];
  public userTags: TagLan[] = [];
  public user: User;
  public selCategory = 0;

  constructor(private http: HttpClient,
    private userService: UserService,
    private languageService: LanguageService,
    private messageService: MessageService,
    private translate: TranslateService,
    private localService: LocalService) {
    this.currentServicesSubject = new BehaviorSubject<Service[]>(null);
    this.currentServices = this.currentServicesSubject.asObservable();
  }

  public get currentServicesValue(): Service[] {
    return this.currentServicesSubject.value;
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

  public async postContactForm(data: DigitalContact){
    return this.http.post(environment.apiEndpoint + "api/formkitdigital", data).toPromise();
  }
}
