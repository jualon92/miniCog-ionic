import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { TranslocoModule } from '@jsverse/transloco';
import { LeaveACommentComponent } from '../shared/leave-a-comment/leave-a-comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    TranslocoModule,
    LeaveACommentComponent,
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
