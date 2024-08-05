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
import { IonicStorageModule } from '@ionic/storage-angular';
import { PickLangBoxComponent } from '../shared/pick-lang-box/pick-lang-box.component';
@NgModule({
  imports: [
    DropdownModule,
    CommonModule,
    FormsModule,
    IonicStorageModule,
    TranslocoRootModule,
    PickLangBoxComponent,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
