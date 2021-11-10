import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuRouterModule } from './menu.router.module';

@NgModule({
  imports: [
    CommonModule,
    MenuRouterModule
  ],
  declarations: [
    MenuComponent,
    MenuHeaderComponent
  ]
})
export class MenuModule { }
