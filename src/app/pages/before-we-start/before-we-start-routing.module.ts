import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforeWeStartPage } from './before-we-start.page';

const routes: Routes = [
  {
    path: '',
    component: BeforeWeStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeWeStartPageRoutingModule {}
