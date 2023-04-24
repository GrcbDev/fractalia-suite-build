import { Injectable } from '@angular/core';
import { Generic } from '../models/generic';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries: Generic[];

  constructor(private http: HttpClient) { }

  public async getCountries(partnerId: number = 0): Promise<Generic[]>
  {
    let params = new HttpParams();

    if(partnerId > 0)
      params = params.set('partnerId', partnerId.toString());

    return this.http.get<Generic[]>(environment.apiEndpoint + "api/country", {params}).toPromise();
  }

}
