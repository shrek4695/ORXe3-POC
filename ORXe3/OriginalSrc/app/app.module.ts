import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TrialModule } from './trial/trial.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HotelResultsComponent } from './components/hotel-results-view/hotel-results/hotel-results.component';
import { HotelResultsContainerComponent } from './pages/hotel-results-container/hotel-results-container.component';
import { HotelResultsViewComponent } from './components/hotel-results-view/hotel-results-view.component';
import { HotelSortContainerComponent } from './components/hotel-results-view/hotel-sort-container/hotel-sort-container.component';
import { HotelItemComponent } from './components/hotel-results-view/hotel-results/hotel-item/hotel-item.component';

import { HotelResultsService } from './shared/services/hotel-results.service';
import { AnalyticsService } from './shared/services/analytics.service';
import { TaviscaOrxe3LibraryModule } from 'tavisca-orxe3-library';
import { HotelReducer } from './shared/reducers/hotel.reducer';
import { SessionIdReducer } from './shared/reducers/sessionId.reducer';
import { HotelEffects } from './shared/effects/hotel.effects';
import { AnalyticsEffect } from './shared/effects/analytics.effects';
import { ServiceUtilitiesService } from './shared/services/service-utilities.service';
import { HeaderModule } from './header/header.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    TaviscaOrxe3LibraryModule,
    TrialModule,
    HeaderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({}),
    StoreModule.forFeature('hotels', HotelReducer),
    StoreModule.forFeature('SessionId', SessionIdReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([HotelEffects, AnalyticsEffect ])
  ],
  providers: [HotelResultsService,AnalyticsService, ServiceUtilitiesService],
  bootstrap: [AppComponent]
  //entryComponents: [HotelResultsContainerComponent]
})
export class AppModule { 
  // constructor(private injector: Injector) {}

  // ngDoBootstrap() {
   
  //   const custo  = createCustomElement(HotelResultsContainerComponent,{injector:this.injector});
  //   customElements.define('app-hotel-results-container', custo);

  // }
}
