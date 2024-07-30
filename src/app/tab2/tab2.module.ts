import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../pages/explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    StepperModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
