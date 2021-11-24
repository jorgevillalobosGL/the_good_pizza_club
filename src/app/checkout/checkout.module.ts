import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRouterModule } from './checkout.router.module';
import { SharedModule } from '@app-shared/shared.module';
import { CheckoutHeaderComponent } from './checkout-header/checkout-header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OrderTabBodyComponent } from './order-tab-body/order-tab-body.component';
import { BillingSummaryComponent } from './billing-summary/billing-summary.component';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CheckoutRouterModule,
    TabsModule.forRoot()
  ],
  declarations: [
    CheckoutComponent,
    OrderTabBodyComponent,
    BillingSummaryComponent,
    CheckoutHeaderComponent,
  ]
})
export class CheckoutModule { }
