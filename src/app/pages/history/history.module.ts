import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { TranslocoModule } from '@jsverse/transloco';
import { LeaveACommentComponent } from '../shared/leave-a-comment/leave-a-comment.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    TranslocoModule,
    LeaveACommentComponent,
    ToolbarComponent
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
