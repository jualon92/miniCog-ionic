import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreClockPageRoutingModule } from './score-clock-routing.module';

import { ScoreClockPage } from './score-clock.page';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { TranslocoModule } from '@jsverse/transloco';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslocoModule,
    MessagesModule,
    ButtonModule,
    ScoreClockPageRoutingModule,
    RadioButtonModule
  ],
  declarations: [ScoreClockPage]
})
export class ScoreClockPageModule {}
