import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeWordRegistrationPage } from './three-word-registration.page';

const routes: Routes = [
  {
    path: '',
    component: ThreeWordRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreeWordRegistrationPageRoutingModule {}
