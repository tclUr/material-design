import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NestedMenuComponent} from './nested-menu.component';
import {MenuComponent} from './menu.component';

const routes: Routes = [
  {path: '', component: NestedMenuComponent},
  {path: '2', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
