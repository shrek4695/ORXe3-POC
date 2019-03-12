import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelResultsComponent } from './components/hotel-results-view/hotel-results/hotel-results.component';
import { HotelResultsContainerComponent } from './pages/hotel-results-container/hotel-results-container.component';
import { HotelResultsViewComponent } from './components/hotel-results-view/hotel-results-view.component';
import { HotelSortContainerComponent } from './components/hotel-results-view/hotel-sort-container/hotel-sort-container.component';
import { HotelItemComponent } from './components/hotel-results-view/hotel-results/hotel-item/hotel-item.component';

import { HotelResultsService } from './shared/hotel-results.service';
import { TaviscaOrxe3LibraryModule } from 'tavisca-orxe3-library';
@NgModule({
  declarations: [
    AppComponent,
    HotelResultsComponent,
    HotelResultsContainerComponent,
    HotelResultsViewComponent,
    HotelSortContainerComponent,
    HotelItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TaviscaOrxe3LibraryModule
  ],
  providers: [HotelResultsService],
  entryComponents: [HotelResultsContainerComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
   
    const custo  = createCustomElement(HotelResultsContainerComponent,{injector:this.injector});
    customElements.define('app-hotel-results-container', custo);

  }
}
