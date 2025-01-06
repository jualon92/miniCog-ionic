import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
import { catchError, Observable, of } from 'rxjs';
import { TtsService } from 'src/app/components/about/tts.service';
import { trigger, transition, style, animate } from '@angular/animations';

interface TtsItem {
  id: string;
  isReading: boolean;
  elements: string[];
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [ MessageService, StorageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomePage implements  AfterViewInit, OnInit {
  displayLangOptions = false;
  NO_LANG_CACHE = false;
  isMobile = false;
  ttsTriggered = false;
  ttsItems: any[] = [
    { id: 'section1', isReading: false, elements: ['title1', 'p1'] },
    { id: 'section2', isReading: false, elements: ['title2', 'p2'] },
    { id: 'section2', isReading: false, elements: ['title3', 'p3'] }
  ];
  @ViewChild(IonModal) modal!: IonModal;
  loudspeakerColor: string = "outline";
  loudspeakerName: string = "volume-medium-outline";


  constructor(
    private storage: StorageService,
    private messageService: MessageService,
    private transloco: TranslocoService,
    public tts: TtsService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    //TODO: make it a service
      this.isMobile = window.innerWidth < 1024;
  }

  async ionViewWillEnter() {
    this.storage.initTimesDone();
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

  async useTts(ttsItem: TtsItem) {
      ttsItem.isReading = !ttsItem.isReading
    try {
  
      // Esperar que todas las lecturas terminen
      const texts = ttsItem.elements.map(id => document.getElementById(id)?.textContent)  as string[];
      await Promise.all(
        texts.map(text => this.tts.readText(text))
      );
    } finally {
      // Restaurar colores al terminar (sea éxito o error)
      ttsItem.isReading = !ttsItem.isReading
      this.cdr.detectChanges();
    }

  }

}
