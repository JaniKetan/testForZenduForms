import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZenduformsComponent } from './zenduforms/zenduforms.component';

const routes: Routes = [
  { path: 'forms', component: ZenduformsComponent },
  { path: 'customers', component: ZenduformsComponent },
  { path: 'submissions', component: ZenduformsComponent },
  { path: 'history', component: ZenduformsComponent },
  { path: 'report', component: ZenduformsComponent },
  { path: 'workflow', component: ZenduformsComponent },
  { path: '', redirectTo: '/submissions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
