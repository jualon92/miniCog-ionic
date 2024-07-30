import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreClockPageRoutingModule } from './score-clock-routing.module';

import { ScoreClockPage } from './score-clock.page';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesModule,
    ButtonModule,
    ScoreClockPageRoutingModule
  ],
  declarations: [ScoreClockPage]
})
export class ScoreClockPageModule {}
