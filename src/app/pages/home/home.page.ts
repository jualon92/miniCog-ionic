import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';
import { Storage } from '@ionic/storage-angular';
import { MessageService } from 'primeng/api';
import { StorageService } from 'src/storage/storage.service';
import { TIMES_DONE } from 'src/storage/storage.entities';
import { IonModal } from '@ionic/angular';
import { HomeService } from './home.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [ MessageService, StorageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements  AfterViewInit, OnInit {
  displayLangOptions = false;
  NO_LANG_CACHE = false; 
  isMobile = false;
  isModalOpen = false;
  comment = '';
  feedback= "";
  value= "";
  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
 
   

  constructor(
    private translocoService: TranslocoService,
    private storage: StorageService,
    private messageService: MessageService,
    private homeService: HomeService,
  ) {}

  ngOnInit(): void {
    //TODO: make it a service
      this.isMobile = window.innerWidth < 1024;
  }

  async ionViewWillEnter() {
    this.storage.initTimesDone();
  }

 

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  learnMore(){
    
  }
  confirm() { 
    this.homeService.saveFeedback(this.feedback).subscribe();
   this.modal.dismiss(this.feedback, 'confirm');   
 
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<any>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
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

  ignoreResponsiveWarning(){
    this.isMobile = true;
  }

 
}
