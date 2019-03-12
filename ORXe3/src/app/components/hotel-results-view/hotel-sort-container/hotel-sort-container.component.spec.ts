import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSortContainerComponent } from './hotel-sort-container.component';

describe('HotelSortContainerComponent', () => {
  let component: HotelSortContainerComponent;
  let fixture: ComponentFixture<HotelSortContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSortContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSortContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
