import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelResultsViewComponent } from './hotel-results-view.component';

describe('HotelResultsViewComponent', () => {
  let component: HotelResultsViewComponent;
  let fixture: ComponentFixture<HotelResultsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelResultsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelResultsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
