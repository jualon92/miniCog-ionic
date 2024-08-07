import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
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
  NO_LANG_CACHE = true;

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
        detail: 'Recommended to view on mobile device',
      });
    }
  }

  async handleAppLang() {
    if (this.NO_LANG_CACHE) {
      await this.storage.clear();
      this.displayLangOptions = true;
      return;
    }

    const selectedLang = await this.storage.get('selectedLang');
    if (selectedLang) {
      this.translocoService.setActiveLang(selectedLang);
      console.log('lang already active: ', selectedLang);
    } else {
      console.log('no active lang, showing modal');
      this.displayLangOptions = true;
    }
  }

  handleLangSelection(code: string) {
    this.storage.set('selectedLang', code);
    this.translocoService.setActiveLang(code);
    this.displayLangOptions = false;
  }
}
