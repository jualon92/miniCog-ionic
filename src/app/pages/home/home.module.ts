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
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ShowHistoryComponent } from '../shared/buttons/show-history/show-history.component';
import { Card, CardModule } from 'primeng/card';
import { QRCodeModule } from 'angularx-qrcode';
import { FloatLabelModule } from 'primeng/floatlabel';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { LeaveACommentComponent } from '../shared/leave-a-comment/leave-a-comment.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
@NgModule({
  imports: [
    DropdownModule,
    CommonModule,
    FormsModule,
    CardModule,
    IonicStorageModule,
    QRCodeModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    FloatLabelModule,
    InputTextareaModule,
    TranslocoRootModule,
    PickLangBoxComponent,
    IonicModule,
    RippleModule,
    HomePageRoutingModule,
    ShowHistoryComponent,
    LeaveACommentComponent,
    ToolbarComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
