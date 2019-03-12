import { Component, OnInit, Input } from '@angular/core';
import { HotelResultsService } from 'src/app/shared/hotel-results.service';

@Component({
  selector: 'app-hotel-results',
  templateUrl: './hotel-results.component.html',
  styleUrls: ['./hotel-results.component.css']
})
export class HotelResultsComponent implements OnInit {

   @Input() HotelResults;
  constructor(private hotelResultsService: HotelResultsService) { 
    
  }

  ngOnInit() {
  }

}
