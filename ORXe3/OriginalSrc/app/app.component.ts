import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: 'Arthur',
    age: 42
  };
  numb = {
    Number: 5
  }
  Number = 6
  title = 'ORXe3';
  hi = 'ff48f99f-baad-4a2a-909d-9dad7f8111a1-HLNXT$docs';
  modulename = 'header';
  culturename = 'chinese';
  constructor(private translate: TranslateService) {
    import('../assets/i18n/'+this.modulename+'/'+this.modulename+'-'+this.culturename+'-culture.json').then(module => {
      console.log("workedddd", module);
    });
    // translate.setDefaultLang('header/header-chinese-culture');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
