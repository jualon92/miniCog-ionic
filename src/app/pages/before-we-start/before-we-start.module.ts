import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforeWeStartPageRoutingModule } from './before-we-start-routing.module';

import { BeforeWeStartPage } from './before-we-start.page';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslocoRootModule,
    IonicModule,
    BeforeWeStartPageRoutingModule
  ],
  declarations: [BeforeWeStartPage]
})
export class BeforeWeStartPageModule {}
