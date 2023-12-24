import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tabsgroup } from './tabsgroup/tabsgroup.component';
import { DynamicTree } from './dynamic-tree/dynamic-tree.component';

const routes: Routes = [
  { path: '', component: tabsgroup},
  { path: '/tabsgroup', component: DynamicTree},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }