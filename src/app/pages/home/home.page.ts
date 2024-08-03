import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [Storage]
 
})
export class HomePage {
   displayLangOptions = false;
   NO_LANG_CACHE = true;
   //TODO: make lang selection modal a component
   languages = [
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
    { name: 'Italian', code: 'it' },
];
    


   selectedLang: any | undefined;

  constructor(private translocoService: TranslocoService,
    private storage: Storage
  ) { 
    
  }

  async ngOnInit() {
    await this.storage.create();

    this.handleAppLang();
  }
  
 
  async handleAppLang(){
    if (this.NO_LANG_CACHE){
      this.storage.clear();
      this.displayLangOptions = true;
      return;
    }

    const selectedLang = await this.storage.get('selectedLang');
    if(selectedLang){
      this.translocoService.setActiveLang(selectedLang);
      console.log("lang already active: ", selectedLang);
    }else{
      console.log("no active lang, showing modal");
      this.displayLangOptions = true;
    }
  }

  handleLangSelection(){
      this.storage.set('selectedLang', this.selectedLang.code);
      this.translocoService.setActiveLang(this.selectedLang.code);
      this.displayLangOptions = false;
  }

  


}
