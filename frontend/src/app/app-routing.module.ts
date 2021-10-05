import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProbabilityTableComponent } from './probability-table/probability-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dealer', loadChildren: () => import('./dealer/dealer.module').then(m => m.DealerModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'probability', component: ProbabilityTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
