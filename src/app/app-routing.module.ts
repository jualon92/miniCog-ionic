import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '',
   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'three-word-registration',
    loadChildren: () => import('./pages/three-word-registration/three-word-registration.module').then( m => m.ThreeWordRegistrationPageModule)
  }, 
  {
    path: 'before-we-start',
    loadChildren: () => import('./pages/before-we-start/before-we-start.module').then( m => m.BeforeWeStartPageModule)
  },
  {
    path: 'clow-drawing',
    loadChildren: () => import('./pages/clow-drawing/clow-drawing.module').then( m => m.ClowDrawingPageModule)
  },
  {
    path: 'scoring',
    loadChildren: () => import('./pages/scoring/scoring.module').then( m => m.ScoringPageModule)
  },
  {
    path: 'score-clock',
    loadChildren: () => import('./pages/score-clock/score-clock.module').then( m => m.ScoreClockPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
