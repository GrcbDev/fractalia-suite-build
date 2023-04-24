import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Trendmicro } from '../models/trendmicro';

@Injectable({
    providedIn: 'root'
  })
  export class TrendmicroService {
    trendmicro: Trendmicro;

    constructor(private http: HttpClient) {
      }

    public getTrendmicroLicense() {
        let params = new HttpParams();
        return this.http.get<Trendmicro>(environment.apiEndpoint + "api/trendmicro/license", { params });
      }
  }