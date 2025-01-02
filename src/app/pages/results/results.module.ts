import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { SafeHtmlPipe } from 'src/app/safe-html.pipe';
import { ReadMoreComponent } from '../shared/buttons/read-more/read-more.component';
import { ShowHistoryComponent } from "../shared/buttons/show-history/show-history.component";
import { TotalColorPipe } from './total-color.pipe';
import { LeaveACommentComponent } from '../shared/leave-a-comment/leave-a-comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadMoreComponent,
    TranslocoRootModule,
    ResultsPageRoutingModule,
    ShowHistoryComponent,
    ShowHistoryComponent,
    TotalColorPipe,
    LeaveACommentComponent,
],
  declarations: [ResultsPage,SafeHtmlPipe,  ]
})
export class ResultsPageModule {}
