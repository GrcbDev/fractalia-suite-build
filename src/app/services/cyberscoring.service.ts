import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { CyberscoringRequest } from '../models/cyberscoring/cyberscoringRequest';
import { CyberscoringCompanyInfo } from '../models/cyberscoring/cyberscoringCompanyInfo';
import { StringUtils } from '../utils/string-utils';
import { CyberscoringSector } from '../models/cyberscoring/cyberscoringSector';

@Injectable({
  providedIn: 'root'
})
export class CyberscoringService {

  public serviceId: number;
  public serviceName: string;
  public serviceIcon: string;
  public serviceDesc: string;
  public longDesc: string;


  public sectors: CyberscoringSector[] = [];
  public companyData: CyberscoringCompanyInfo;

  constructor(private http: HttpClient) { }

  public async getCompany(): Promise<CyberscoringCompanyInfo> {
    return this.http.get<CyberscoringCompanyInfo>(environment.apiEndpoint + "api/cyberscoring").toPromise();
  }

  public getSectors2() {
    return this.http.get<any>(environment.apiEndpoint + "api/cyberscoring/sector");
  }

  public getCompany2() {
    return this.http.get<CyberscoringCompanyInfo>(environment.apiEndpoint + "api/cyberscoring");
  }

  setSectors(data: any) {
    this.sectors = StringUtils.deepClone(data);
  }

  getSectorProcessedData() {
    return StringUtils.deepClone(this.sectors);
  }

  processSectorInformation(data: any) {
    const cloneData = StringUtils.deepClone(data);
    cloneData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return cloneData;
  }

  setCompanyData(data: any) {
    this.companyData = StringUtils.deepClone(data);
  }

  getCompanyData() {
    return StringUtils.deepClone(this.companyData);
  }


  public async createCompany(body: CyberscoringRequest) {
    return this.http.post(environment.apiEndpoint + "api/cyberscoring", body, {observe: 'response'} );
  }
}
