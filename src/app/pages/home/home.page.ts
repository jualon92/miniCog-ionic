import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
   displayLangOptions = true;
   languages = [
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
    { name: 'Italian', code: 'it' },
];
    


   selectedLang: any | undefined;

  constructor(private translocoService: TranslocoService) { 
  }

 

  handleLangSelection(){
      this.translocoService.setActiveLang(this.selectedLang.code);
      this.displayLangOptions = false;
  }


}
