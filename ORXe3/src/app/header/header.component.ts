import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  //[build:configuration TemplateUrl_Header_Main || 'header]
  templateUrl: //[Configuration Start] Header_Enable_CustomHTML ((_configurations[ClientName].Header_Enable_CustomHTML.enableHTML))
  './header.component.html',
  //[Configuration End] Header_Enable_CustomHTML
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = {
    User: {
      Name: {
        Display: "Shreea Kapoor"
      }
    }
  }

  T = {
    Utility: {
      GenerateSiteUrl: function (sitePath) {
        var url = 'http://localhost:1828/BaseResponsive/';

        if (sitePath == null) {
          return url;
        }
        if (sitePath[0] == '/' || sitePath[0] == '\\') {
          url += sitePath.substring(1);
        } else {
          url += sitePath;
        }
        return url;
      }
    },
    LogoUrl: 'http://localhost:1828/Uploads/Sites/BaseResponsive/Themes/Default/images/branding/logo_header.svg',
    Settings: {
      User: {
        Name: {
          Display: "Shreea Kapoor"
        },
        AvailablePoints: 10000000,
        Authenticated: true
      }
    }
  }
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('header/header-english-culture');
  }

  changeLang(setLang) {
    this.translate.use(setLang);
  }

  ngOnInit() {
  }

}
