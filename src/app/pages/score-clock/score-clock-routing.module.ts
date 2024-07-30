import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreClockPage } from './score-clock.page';

const routes: Routes = [
  {
    path: '',
    component: ScoreClockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreClockPageRoutingModule {}
