import { Component, OnInit, Input } from '@angular/core';
import { HotelResultsService } from '../../shared/hotel-results.service';
@Component({
  selector: 'app-hotel-results-container',
  templateUrl: './hotel-results-container.component.html',
  styleUrls: ['./hotel-results-container.component.css']
})
export class HotelResultsContainerComponent implements OnInit {
  @Input() hi;
  HotelResults;
  constructor(private hotelResultsService: HotelResultsService) {
    
  }


  ngOnInit() {
    var mockData = {
      "sessionId": "0f8fad5b-d9cb-461f-a165-70867728951z",
      "hotels": [
        {
          "id": "86451",
          "name": "Novotel Convention & Wellness Roissy CDG",
          "supplierId": "1h8r3qo8v7k",
          "refundability": "NonRefundable",
          "displayFare": {
            "currency": "USD",
            "totalFare": 248.03,
            "breakup": {
              "baseFare": 240.71,
              "taxes": [
                {
                  "amount": 20.46,
                  "code": "LT",
                  "desc": "Luxury tax"
                }
              ],
              "fees": [
                {
                  "amount": 12.45,
                  "desc": "Late check-out fee",
                  "source": "supplier"
                }
              ],
              "discounts": [
                {
                  "amount": 36.09,
                  "desc": "Save 15%",
                  "source": "supplier"
                }
              ],
              "markups": [
                {
                  "amount": 10.5,
                  "desc": "Agency",
                  "source": "agency"
                }
              ]
            },
            "commissions": [
              {
                "amount": 10.5,
                "desc": "Flat rate commission for the agency"
              }
            ]
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "5256|5",
                "name": "Demo Hotel Reward $100 Dollars Off",
                "rank": 1,
                "type": "Dollars_Off_Incremental",
                "recommendation": {
                  "cash": 250.11,
                  "points": 10000,
                  "fees": [
                    {
                      "cash": 120.11,
                      "points": 10000,
                      "description": "Fees"
                    }
                  ],
                  "maxQuantity": 1
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1000,
                  "maximumPoints": 10000,
                  "pointToCashFactor": {
                    "value": 0.01,
                    "operator": "Multiply"
                  },
                  "pointStepSize": 10,
                  "cashRoundingOff": 100,
                  "roundingType": "Up"
                },
                "strikeoutValue": {
                  "cash": 0,
                  "points": 0
                },
                "actualValue": {
                  "cash": 120.1,
                  "points": 10000
                },
                "stateBag": [
                  {
                    "key1": "value 1"
                  }
                ]
              }
            ]
          },
          "content": {
            "rating": 3,
            "geocode": {
              "lat": 38.53658,
              "long": 0.132264
            },
            "contact": {
              "address": {
                "line1": "3077 ACME Street",
                "line2": "Landmark: Beside the ACME Shopping Mall",
                "city": {
                  "code": "SFO",
                  "name": "San Francisco"
                },
                "state": {
                  "code": "CA",
                  "name": "California"
                },
                "countryCode": "US",
                "postalCode": "94133"
              },
              "phones": [
                {
                  "type": "Fax",
                  "number": "555-0173",
                  "countryCode": "1",
                  "ext": "123",
                  "areaCode": "200"
                }
              ],
              "email": "abc@xyz.com"
            },
            "websiteURL": "www.ACMEhotel.com",
            "heroImage": {
              "height": 250,
              "imageCaption": "Guest Bathroom",
              "imageCategory": "Guestroom",
              "URL": "http://d3mj096p5q0e20.cloudfront.net/fi/HCM/457757/7251474_2_b.jpg",
              "width": 350,
              "horizontalResolution": 300,
              "verticalResolution": 300,
              "attributes": {
                "viewType": "Room Amenities"
              }
            },
            "descriptions": [
              {
                "type": "resortdescription",
                "value": "Enjoy a one-of-a-kind experience: the best service and facilities in Miami. Unspoiled beaches, dream swimming pools, and unique tropical gardens. Privileged climate all year round in one of Miami’s best resorts."
              }
            ],
            "activities": [
              {
                "name": "Tennis Club",
                "desc": "Improve your serve under the expert advice of our certified pros. Ranked as one of the top 50 Best Tennis Resorts Worldwide, The ACME Tennis Club is your chance to enjoy world-class tennis.",
                "category": "Outdoor activities"
              }
            ],
            "areaAttractions": [
              {
                "name": "Perez Art Museum Miami",
                "desc": "Pérez Art Museum Miami (PAMM) is a modern and contemporary art museum dedicated to collecting and exhibiting international art of the 20th and 21st centuries."
              }
            ],
            "policies": [
              {
                "type": "Cancellation",
                "text": "Cancellations must be made at least 3 days prior to arrival in order to avoid a full-stay penalty, but not to exceed 3 nights room & tax. For example, a cancellation penalty for a 2-night stay will be 2 nights room and tax. A cancellation penalty for a 5-night stay will be 3 nights room and tax"
              }
            ],
            "amenities": [
              {
                "name": "Internet Access",
                "desc": "Complimentary standard Internet access is available to all guests at all ACME Hotels and Resorts.",
                "category": "Room Amenities"
              }
            ],
            "checkinCheckoutPolicy": [
              {
                "inTime": "15:00",
                "outTime": "11:00",
                "days": [
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat"
                ]
              }
            ],
            "hotelChain": {
              "name": "ACME group of hotels",
              "code": "ACME"
            },
            "thumbnails": [
              {
                "height": 250,
                "imageCaption": "Guest Bathroom",
                "imageCategory": "Guestroom",
                "URL": "http://d3mj096p5q0e20.cloudfront.net/fi/HCM/457757/7251474_2_b.jpg",
                "width": 350,
                "horizontalResolution": 300,
                "verticalResolution": 300,
                "attributes": {
                  "viewType": "Room Amenities"
                }
              }
            ],
            "images": [
              {
                "height": 250,
                "imageCaption": "Guest Bathroom",
                "imageCategory": "Guestroom",
                "URL": "http://d3mj096p5q0e20.cloudfront.net/fi/HCM/457757/7251474_2_b.jpg",
                "width": 350,
                "horizontalResolution": 300,
                "verticalResolution": 300,
                "attributes": {
                  "viewType": "Room Amenities"
                }
              }
            ]
          },
          "offers": [
            {
              "title": "Save 15%",
              "desc": "This offer provides a 15% discount",
              "discountOffer": 36.09,
              "percentageDiscountOffer": 0,
              "stayOffer": {
                "stayNights": 0,
                "freeNights": 0
              }
            }
          ]
        }
      ],
      "paging": {
        "totalRecords": 1,
        "pageNo": 1,
        "pageSize": 10
      }
    };

    this.hotelResultsService.setSessionId(this.hi);
    this.hotelResultsService.checkHotelStatus().subscribe((data) => {
      if (data['status'] == 'Completed') {
        let Observable = this.hotelResultsService.getFinalResults(data);
        Observable.subscribe((data) => {
          this.hotelResultsService.setHotelResults(data['hotels']);
          this.HotelResults = this.hotelResultsService.getHotelResults();
        },
          (error) => {
            console.log("error");
            this.hotelResultsService.setHotelResults(mockData['hotels']);
          })
      };
    });

  }
}
