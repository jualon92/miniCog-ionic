import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../pages/explore-container/explore-container.module';
import { StepperModule } from 'primeng/stepper';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
@NgModule({
  imports: [
    ButtonModule,
    StepperModule,
    IonicModule,
    CommonModule,
    FormsModule, InputNumberModule,
    MessagesModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SelectButtonModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
