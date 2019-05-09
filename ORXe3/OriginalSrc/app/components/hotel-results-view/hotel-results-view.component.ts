import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-results-view',
  templateUrl: './hotel-results-view.component.html',
  styleUrls: ['./hotel-results-view.component.css']
})
export class HotelResultsViewComponent implements OnInit {

  @Input() HotelResults;
  constructor() {
    
   }

  ngOnInit() {
  }

}
