import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmailService
{
  constructor(private http: HttpClient) {}


  public sendEmail(email:string, partnerid:string): Promise<boolean>
  {
    let params = new HttpParams();
    params = params.append('email', encodeURIComponent(email));
    params = params.append('partnerid', partnerid);
    return this.http.get<boolean>(environment.apiEndpoint + "api/email/sentEmail", {params}).toPromise();
  }
  public sendEmailTest(email:string, partnerid:string): Promise<boolean>
  {
    let params = new HttpParams();
    params = params.append('email', encodeURIComponent(email));
    params = params.append('partnerid', partnerid);
    return this.http.get<boolean>(environment.apiEndpoint + "api/email/sentEmailTest", {params}).toPromise();
  }

}

