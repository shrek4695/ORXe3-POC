import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
if(customElements.get('app-hotel-results-container')) {
  console.log('First Component already defined -> nothing to do');
}
else {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}
