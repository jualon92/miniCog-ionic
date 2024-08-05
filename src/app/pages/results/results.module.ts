import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { SafeHtmlPipe } from 'src/app/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    TranslocoRootModule,
    ResultsPageRoutingModule
  ],
  declarations: [ResultsPage,SafeHtmlPipe]
})
export class ResultsPageModule {}
