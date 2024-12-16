import { Component, OnInit } from '@angular/core';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(  private translocoService: TranslocoService,) {}

  async ngOnInit() { 
    this.handleAppLang();
    
   
  }

    async handleAppLang() {
      
      const code = getBrowserLang() ?? "en" ;
      this.translocoService.setActiveLang(code );
   
    }
  
}
