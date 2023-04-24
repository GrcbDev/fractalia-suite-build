import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Office365Service {

  public ticket: string = "";
  public activated: boolean = false;

  constructor(private http: HttpClient) { }

  public async GetUserOffice365Licence() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let params = new HttpParams();
    params = params.set('userId', '1');
    return this.http.get(environment.apiEndpoint + "api/office365", { headers, responseType: 'text' }).toPromise().then(result => {
      this.ticket = result;
      this.activated = result ? true : false;
    });
  }

  public SetUserOffice365Licence(active?) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let params = new HttpParams();
    params = params.set('IsActivate', active);
    return this.http.get(environment.apiEndpoint + "api/Office365/New", { headers, params, responseType: 'text' }).toPromise();
  }
}
