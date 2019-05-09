import { Injectable } from '@angular/core';
import { HotelResultsService } from './hotel-results.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ServiceUtilitiesService {

  constructor(private hotelService: HotelResultsService) { }
  enableMocking = true;
  mockServiceUrls = {
    'hotelResults': 'http://localhost:4200/assets/mockData/hotelMockData/hotelResultsMock.json',
    'hotelStatus': 'http://localhost:4200/assets/mockData/hotelMockData/hotelStatusMock.json'
  }

  checker() {
    return new Observable();
  }
  Post(url, bodyData, headerData, successCallBack, errorCallBack, resourceKey) {
    console.log(environment['enableMocking']);
    if (environment['enableMocking']) {
      return this.hotelService.ServiceGet(this.mockServiceUrls[resourceKey]).pipe(
        map(response => successCallBack(response)),
        catchError(err => errorCallBack(err))
      );
    }
    else {
      return this.hotelService.ServicePost(url, bodyData, headerData).pipe(
        map(response => successCallBack(response)),
        catchError(err => errorCallBack(err))
      );
    }
  }

}
