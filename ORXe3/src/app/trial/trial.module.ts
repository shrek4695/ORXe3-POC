import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrialComponent } from './trial.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    TrialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrialComponent
  ],
  entryComponents: [TrialComponent]
})
export class TrialModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
   
    const cust  = createCustomElement(TrialComponent,{injector:this.injector});
    customElements.define('app-trial', cust);

  }
}
