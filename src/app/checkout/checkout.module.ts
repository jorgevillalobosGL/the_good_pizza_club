import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRouterModule } from './checkout.router.module';
import { SharedModule } from '@app-shared/shared.module';
import { CheckoutHeaderComponent } from './checkout-header/checkout-header.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CheckoutRouterModule
  ],
  declarations: [
    CheckoutComponent,
    CheckoutHeaderComponent
  ]
})
export class CheckoutModule { }
