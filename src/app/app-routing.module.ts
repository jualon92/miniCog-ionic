import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '',
   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'three-word-registration',
    loadChildren: () => import('./three-word-registration/three-word-registration.module').then( m => m.ThreeWordRegistrationPageModule)
  }, 
  {
    path: 'before-we-start',
    loadChildren: () => import('./before-we-start/before-we-start.module').then( m => m.BeforeWeStartPageModule)
  },
  {
    path: 'clow-drawing',
    loadChildren: () => import('./clow-drawing/clow-drawing.module').then( m => m.ClowDrawingPageModule)
  },
  {
    path: 'scoring',
    loadChildren: () => import('./scoring/scoring.module').then( m => m.ScoringPageModule)
  },
  {
    path: 'score-clock',
    loadChildren: () => import('./score-clock/score-clock.module').then( m => m.ScoreClockPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
