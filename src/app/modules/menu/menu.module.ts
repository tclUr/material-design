import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import {NestedMenuComponent} from './nested-menu.component';
import {MatIconModule, MatMenuModule} from '@angular/material';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [
    NestedMenuComponent,
    MenuComponent
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    NestedMenuComponent,
    MenuComponent
  ]
})
export class MenuModule { }
