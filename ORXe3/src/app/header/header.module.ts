import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { createCustomElement } from '@angular/elements';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [
    HeaderComponent
  ]
})
export class HeaderModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
   
    const cust  = createCustomElement(HeaderComponent,{injector:this.injector});
    customElements.define('app-header', cust);

  }
}