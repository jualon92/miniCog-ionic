import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforeWeStartPageRoutingModule } from './before-we-start-routing.module';

import { BeforeWeStartPage } from './before-we-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeforeWeStartPageRoutingModule
  ],
  declarations: [BeforeWeStartPage]
})
export class BeforeWeStartPageModule {}
