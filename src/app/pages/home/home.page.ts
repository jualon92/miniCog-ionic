import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';
import { Storage } from '@ionic/storage-angular';
import { MessageService } from 'primeng/api';
import { StorageService } from 'src/storage/storage.service';
import { TIMES_DONE } from 'src/storage/storage.entities';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [ MessageService, StorageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, AfterViewInit {
  displayLangOptions = false;
  NO_LANG_CACHE = false;
  MAX_TIMES = 2;

  constructor(
    private translocoService: TranslocoService,
    private storage: StorageService,
    private messageService: MessageService
  ) {}

  async ngOnInit() { 
    this.handleAppLang();
    
   
  }

  async ionViewWillEnter() {
    this.getTimesDone();
  }

  areMaxTimesDone(timesDone: number) {
    return timesDone === this.MAX_TIMES;
  }

  //TODO: move to service, has nothing to do with DOM
  async getTimesDone() {
    let timesDone = await this.storage.getTimesDone(); 
    //reset to 0 if max times done or not set
    if (timesDone ===  null ||   this.areMaxTimesDone(timesDone)) {
      timesDone = 0;
      this.storage.setTimesDone(timesDone);
      return;
    } 
    timesDone++
    this.storage.setTimesDone(timesDone);
  }

  ngAfterViewInit() {
    this.handleDisplayNotification();
  }

  handleDisplayNotification() {
    const userWidth = window.innerWidth;
    if (userWidth > 1023) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Info',
        detail: 'laptop view under construction. Please use mobile view',
      });
    }
  }

  async handleAppLang() {
    
    const code = getBrowserLang() ?? "en" ;
    console.log("c",code)
    this.translocoService.setActiveLang(code );
 
  }

 
}
