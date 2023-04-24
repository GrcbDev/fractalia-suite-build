import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IdentityBreach } from '../models/identityBreach';
import { MonitoredIdentity } from '../models/monitoredIdentity';
import { StringUtils } from '../utils/string-utils';

@Injectable({
  providedIn: 'root'
})
export class MonitoredIdentitiesService {

  public serviceId: number;
  public serviceName: string;
  public serviceIcon: string;
  public serviceDesc: string;
  public longDesc: string;
  public identities: MonitoredIdentity[] = [];
  public maxIdentitiesByUser: number;
  public canAddIdentities: boolean
  protectedIdentities = 0;
  breachedIdentities = 0;

  ITPInformation: any = {};
  reload$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  public async getMonitoredIdentitiesByUser()
  {
    return this.http.get<MonitoredIdentity[]>(environment.apiEndpoint + "api/monitoredidentities/").toPromise().then(result => {
      this.identities = result;
      this.protectedIdentities = this.identities.filter(x=>x.breaches === 0).length;
      this.breachedIdentities = this.identities.length - this.protectedIdentities;
    });
  }

  emitReload(value?: any){
    this.reload$.next(value);
  }

  getMonitoredIdentitiesByUser2() {
    return this.http.get<MonitoredIdentity[]>(environment.apiEndpoint + "api/monitoredidentities");
  }

  setITPInformation(data: any) {
    this.ITPInformation = data;
  }

  formatITPInformation(data: any) {
    if(!data || data.length == 0) return {};
    let maliciousEmail = 0;
    const formatData = data.map((item:any) => {
      if (item.breaches > 0) {
        maliciousEmail++;
        item.cardClass =  'danger';
      } else {
        item.cardClass =  'success';
      }
      return item;
    });

    return {
      totalProtectedEmails: data.length - maliciousEmail,
      totalMaliciousEmails : maliciousEmail,
      items: formatData,
    }
  }

  getITPInformation() {
    return StringUtils.deepClone(this.ITPInformation);
  }

  public addMonitoredIdentity(Identities:Array<MonitoredIdentity>): Promise<boolean>
  {
    return this.http.post<boolean>(environment.apiEndpoint + "api/monitoredidentities/", Identities).toPromise();
  }

  public addMonitoredIdentities(Identity:any[]): Promise<boolean>
  {
    return this.http.post<boolean>(environment.apiEndpoint + "api/monitoredidentities/", Identity).toPromise();
  }

  public deleteMonitoredIdentity(IdentityId:number): Promise<boolean>
  {
    return this.http.delete<boolean>(environment.apiEndpoint + "api/monitoredidentities?monitoredIdentityId=" + IdentityId).toPromise();
  }

  public getIdentityBreach(IdentityId:number)
  {
    return this.http.get<IdentityBreach[]>(environment.apiEndpoint + "api/monitoredidentities/getIdentityBreach?monitoredIdentityId=" + IdentityId).toPromise();
  }
}
