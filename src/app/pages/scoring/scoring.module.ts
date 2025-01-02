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
import { LeaveACommentComponent } from '../shared/leave-a-comment/leave-a-comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslocoRootModule,
    MessagesModule,
    ButtonModule,
    InputNumberModule,
    ScoringPageRoutingModule,
    LeaveACommentComponent
  ],
  declarations: [ScoringPage]
})
export class ScoringPageModule {}
