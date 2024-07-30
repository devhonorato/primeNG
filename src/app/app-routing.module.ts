import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstruturaComponent } from './layout/components/estrutura/estrutura.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VazioComponent } from './components/vazio/vazio.component';
// import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path: '', component: EstruturaComponent,
  children: [
    { path: '', component: DashboardComponent, loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'set/vazio', component: VazioComponent, loadChildren: () => import('./components/vazio/vazio.module').then(m => m.VazioModule) },
  ]},
  { path: 'landing', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
