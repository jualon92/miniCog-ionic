import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';
import { Storage } from '@ionic/storage-angular';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [Storage, MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, AfterViewInit {
  displayLangOptions = false;
  NO_LANG_CACHE = false;

  constructor(
    private translocoService: TranslocoService,
    private storage: Storage,
    private messageService: MessageService
  ) {}

  async ngOnInit() {
    await this.storage.create(); 
    this.handleAppLang();
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
