import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Storage } from '@ionic/storage-angular';
import { Language } from '../shared/pick-lang-box/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [Storage],
  changeDetection: ChangeDetectionStrategy.OnPush,
 
})
export class HomePage implements OnInit {
   displayLangOptions = false;
   NO_LANG_CACHE = true;
    

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

  handleLangSelection(code: string){
      this.storage.set('selectedLang', code);
      this.translocoService.setActiveLang(code);
      this.displayLangOptions = false;
  }

  


}
