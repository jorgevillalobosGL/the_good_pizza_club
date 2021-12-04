import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
  { path: 'order-complete', component: OrderCompleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRouterModule { }
