import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  dumpUrl = "http://localhost:3000/tracker";

  dumpData(data) {
    console.log('dump data service dumpdata() working');
    let reqBody = data;
    return this.http.post(this.dumpUrl, reqBody);
  }
}
