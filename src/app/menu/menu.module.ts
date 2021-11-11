import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuRouterModule } from './menu.router.module';
import { SharedModule } from '@app-shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';

// Component
import { MenuComponent } from './menu.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { RepertoryComponent } from './repertory/repertory.component';
// import { CustomizePizzaFormComponent } from '../shared/components/customize-pizza-form/customize-pizza-form.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuRouterModule,
    ModalModule.forRoot()
  ],
  declarations: [
    MenuComponent,
    RepertoryComponent,
    MenuHeaderComponent,
    // CustomizePizzaFormComponent
  ]
})
export class MenuModule { }
