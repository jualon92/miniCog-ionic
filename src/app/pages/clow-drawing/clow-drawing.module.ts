import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClowDrawingPageRoutingModule } from './clow-drawing-routing.module';

import { ClowDrawingPage } from './clow-drawing.page';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslocoRootModule,
    ClowDrawingPageRoutingModule,
    MessagesModule,
    ButtonModule,
  ],
  declarations: [ClowDrawingPage]
})
export class ClowDrawingPageModule {}
