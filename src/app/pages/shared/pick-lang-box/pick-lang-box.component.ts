import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { IonButton } from '@ionic/angular/standalone';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { langMock, Language } from './language';

@Component({
  selector: 'app-pick-lang-box',
  templateUrl: './pick-lang-box.component.html',
  styleUrls: ['./pick-lang-box.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    CommonModule,
    FormsModule,
    TranslocoModule,
    DialogModule,
    ListboxModule,
    ButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickLangBoxComponent {

  @Input() displayLangOptions = false;
  @Input() languages = langMock;
  @Input() selectedLang!: Language;

  @Output() langSelected = new EventEmitter<any>();
  constructor() {}
}
