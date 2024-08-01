import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreeWordRegistrationPageRoutingModule } from './three-word-registration-routing.module';

import { ThreeWordRegistrationPage } from './three-word-registration.page';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslocoRootModule,
    MessagesModule,
    ButtonModule,
    ThreeWordRegistrationPageRoutingModule
  ],
  declarations: [ThreeWordRegistrationPage]
})
export class ThreeWordRegistrationPageModule {}
