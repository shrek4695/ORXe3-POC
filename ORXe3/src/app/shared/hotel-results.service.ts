import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelResultsService {

  private _sessionId: string;

  HotelResults;
  constructor(private http: HttpClient) { }
  siteResultUrl = 'https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/results';

  header = new HttpHeaders({
    "cnx-correlationid": "01ed866c-156e-497c-b2e5-2e40b26a9bc2",
    "cnx-userip": "127.0.0.1",
    "cnx-tenantid": "2qiohrc1jb4",
    "Content-Type": "application/json",
    "Accept-Language": "en-US",
    "crossDomain": "true"
  });



  setSessionId(sessionId) {
    this._sessionId = sessionId;
  }
  getFinalResults(response) {
    var ResultBody = {
      "sessionId": this._sessionId,
      "paging": {
        "pageNo": 1,
        "pageSize": 10,
        "orderBy": "price asc, rating desc"
      },
      "currency": "USD",
      "contentPrefs": [
        "Basic"
      ],
      "filters": {
        "minHotelPrice": 1,
        "maxHotelPrice": 10000,
        "minHotelRating": 1,
        "maxHotelRating": 5,
        "hotelChains": [
          "Novotel",
          "Marriott",
          "Hilton",
          "Accor"
        ],
        "allowedCountry": "FR"
      },
      "customerInfo": {
        "id": "103_3067683670",
        "availablePointBalance": 70000
      }
    };
    console.log("sess", this._sessionId);
    if (response['status'] == "Completed") {
      return this.http.post(this.siteResultUrl, JSON.stringify(ResultBody), { headers: this.header })
    }
  }

  setHotelResults(HotelResults) {
    console.log("helll", HotelResults);
    this.HotelResults = HotelResults;
    console.log('checker', this.getHotelResults());
  }

  getHotelResults() {
    return this.HotelResults;
  }

  checkHotelStatus() {

    var header = new HttpHeaders({
      "cnx-correlationid": "01ed866c-156e-497c-b2e5-2e40b26a9bc2",
      "cnx-userip": "127.0.0.1",
      "cnx-tenantid": "2qiohrc1jb4",
      "Content-Type": "application/json",
      "Accept-Language": "en-US",
      "crossDomain": "true"
    });

    var StatusBody = {
      "sessionId": this._sessionId
    }

    var siteStatusUrl = 'https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/status';

    return this.http.post(siteStatusUrl, JSON.stringify(StatusBody), { headers: header })
  }
}
