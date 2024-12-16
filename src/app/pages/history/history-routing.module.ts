import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryPage } from './history.page';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TranslocoModule } from '@jsverse/transloco';
const routes: Routes = [
  {
    path: '',
    component: HistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    ButtonModule,
    TableModule,
  ],
})
export class HistoryPageRoutingModule {}
