import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuRouterModule } from './menu.router.module';
import { SharedModule } from '@app-shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';

// Services
import { ProductsService } from '../services/products.service';
// Component
import { MenuComponent } from './menu.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { RepertoryComponent } from './repertory/repertory.component';

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
    MenuHeaderComponent
  ],
  providers: [ProductsService]
})
export class MenuModule { }
