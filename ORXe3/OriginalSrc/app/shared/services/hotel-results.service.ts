import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HotelResultsService {

   constructor(private http: HttpClient) { }

  ServicePost(url, body, header) {
    return this.http.post(url, JSON.stringify(body), { headers: header });
  }

  ServiceGet(url) {
    debugger;
    return this.http.get(url);
  }
}
