import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClowDrawingPage } from './clow-drawing.page';

const routes: Routes = [
  {
    path: '',
    component: ClowDrawingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClowDrawingPageRoutingModule {}
