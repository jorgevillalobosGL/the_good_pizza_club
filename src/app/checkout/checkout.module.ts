import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { reducer } from './store/checkout.reducer';
import { SharedModule } from '@app-shared/shared.module';
import { CheckoutEffects } from './store/checkout.effects';
import { CheckoutRouterModule } from './checkout.router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckoutComponent } from './checkout.component';
import { AddressModalComponent } from './address-modal/address-modal.component';
import { OrderTabBodyComponent } from './order-tab-body/order-tab-body.component';
import { BillingSummaryComponent } from './billing-summary/billing-summary.component';
import { CheckoutHeaderComponent } from './checkout-header/checkout-header.component';
import { AddressTabBodyComponent } from './address-tab-body/address-tab-body.component';
import { PaymentTabBodyComponent } from './payment-tab-body/payment-tab-body.component';
import { CreditCardModalComponent } from './credit-card-modal/credit-card-modal.component';
import { CheckoutTabBodyComponent } from './checkout-tab-body/checkout-tab-body.component';
import { TotalPaymentComponent } from './total-payment/total-payment.component';

const COMPONENTS = [
  CheckoutComponent,
  AddressModalComponent,
  OrderTabBodyComponent,
  TotalPaymentComponent,
  BillingSummaryComponent,
  CheckoutHeaderComponent,
  AddressTabBodyComponent,
  PaymentTabBodyComponent,
  CreditCardModalComponent,
  CheckoutTabBodyComponent,
];
@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    CheckoutRouterModule,
    ModalModule.forRoot(),
    StoreModule.forFeature('checkout', reducer),
    EffectsModule.forFeature([CheckoutEffects]),
  ],
  declarations: [ ...COMPONENTS ]
})
export class CheckoutModule { }
