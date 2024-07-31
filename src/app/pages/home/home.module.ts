import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonButton, IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TranslocoHttpLoader } from 'src/app/transloco-loader';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
@NgModule({
  imports: [
    DropdownModule,
    ListboxModule,
    CommonModule,
    FormsModule,
    DialogModule,
    TranslocoRootModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
