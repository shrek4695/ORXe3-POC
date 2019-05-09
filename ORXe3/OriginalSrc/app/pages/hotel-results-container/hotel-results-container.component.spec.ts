import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelResultsContainerComponent } from './hotel-results-container.component';

describe('HotelResultsContainerComponent', () => {
  let component: HotelResultsContainerComponent;
  let fixture: ComponentFixture<HotelResultsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelResultsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelResultsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
