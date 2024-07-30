import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoringPageRoutingModule } from './scoring-routing.module';

import { ScoringPage } from './scoring.page';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesModule,
    ButtonModule,
    ScoringPageRoutingModule
  ],
  declarations: [ScoringPage]
})
export class ScoringPageModule {}
