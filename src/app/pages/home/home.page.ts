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
   languages =
    [
      { name: 'English', code: 'en', disabled: false },
      { name: 'Spanish', code: 'es', disabled: false },
      { name: 'Portuguese', code: 'pt', disabled: false },
      { name: 'Chinese', code: 'zh', disabled: false },
      { name: 'French', code: 'fr', disabled: false },
      { name: 'German', code: 'de', disabled: false },
      { name: 'Italian', code: 'it', disabled: false },
      { name: 'Japanese', code: 'ja', disabled: false },
      { name: 'Korean', code: 'ko', disabled: false },
      { name: 'Russian', code: 'ru', disabled: false },
      { name: 'Arabic', code: 'ar', disabled: false },
      { name: 'Bangali', code: 'bn', disabled: false },
    
  ]
  
    


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
