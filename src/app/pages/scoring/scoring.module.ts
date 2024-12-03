import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoringPageRoutingModule } from './scoring-routing.module';

import { ScoringPage } from './scoring.page';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslocoRootModule,
    MessagesModule,
    ButtonModule,
    InputNumberModule,
    ScoringPageRoutingModule
  ],
  declarations: [ScoringPage]
})
export class ScoringPageModule {}
