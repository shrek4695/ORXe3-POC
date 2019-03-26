import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as appState from '../../../shared/interfaces/app.state';
import * as analyticsActions from '../../../shared/actions/analytics.action';

@Component({
  selector: 'app-hotel-results',
  templateUrl: './hotel-results.component.html',
  styleUrls: ['./hotel-results.component.css']
})
export class HotelResultsComponent implements OnInit {

  @Input() HotelResults;
  constructor(private store: Store<appState.AppState>) {
     
   }

  ngOnInit() { }

  onHotelSelected(event) {    
    this.store.pipe(select(appState.getSessionId)).subscribe(SessionId => {
      event.sessionId = SessionId;
    });
    console.log("selected hotel event", event);
    this.store.dispatch(new analyticsActions.AnalyticsDataLoad(event));
  }

}