import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as appState from '../../shared/interfaces/app.state';
import * as sessionIdActions from '../../shared/actions/sessionId.action';
import * as hotelActions from '../../shared/actions/hotel.action';
import * as analyticsActions from '../../shared/actions/analytics.action';
import json from '../../../../angular.json';
@Component({
  selector: 'app-hotel-results-container',
  templateUrl: './hotel-results-container.component.html',
  styleUrls: ['./hotel-results-container.component.css']
})
export class HotelResultsContainerComponent implements OnInit  {
  @Input() hi;
  HotelResults;
  constructor(private store: Store<appState.AppState>) { }

  ngOnInit() {
    console.log('jssoooon', json);
    this.store.dispatch(new sessionIdActions.SetSessionId(this.hi));
    // Function to watch for Analytic Data changes in Store
    this.checkingAnalyticsData();

    this.store.pipe(select(appState.getHotelCheckStatus)).subscribe(CheckStatus => {
      if (CheckStatus) {

        this.store.pipe(select(appState.getHotelResultsStatus)).subscribe(ResultStatus => {
          if (ResultStatus) {

            this.store.pipe(select(appState.getHotel)).subscribe(hotelResults => {
              this.HotelResults = hotelResults
            })
          } else {

            this.store.dispatch(new hotelActions.HotelResultsLoad(this.hi))
          }
        })
      } else {

        this.store.dispatch(new hotelActions.CheckStatusLoad(this.hi));
      }
    })
  }

  checkingAnalyticsData() {
    this.store.pipe(select(appState.getAnalyticData)).subscribe(analyticData => {
      if (analyticData)
        this.store.dispatch(new analyticsActions.AnalyticsDataLoad(analyticData));
    });
  }
}
