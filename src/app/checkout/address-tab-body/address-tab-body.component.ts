import { Component, OnInit, TemplateRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { AddressCard } from '@app-shared/models/general.model';
import { AppState, selectUser } from '../../store/app.reducer';
import { CheckoutState, selectAddresses } from '../store/checkout.reducer';
import { map } from 'rxjs/operators';
import { CardStates, CardTypes } from '@app-shared/stories/address-credit-card/address-credit-card.component';
import { loadAddresses } from '../store/checkout.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-tab-body',
  templateUrl: './address-tab-body.component.html'
})
export class AddressTabBodyComponent implements OnInit {
  public data: AddressCard | null = null;
  public dataIndex: number | null;
  public addresses$: Observable<AddressCard[] | null>;
  public user$ = this.appStore.pipe(
    select(selectUser),
  );
  private modalRef?: BsModalRef;

  public openModal(template: TemplateRef<any>, address?: AddressCard, index?: number) {
    this.data = address || null;
    this.dataIndex = index || null;
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-md' });
  }

  public onCloseModal() {
    this.modalRef?.hide();
  }

  public logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  private getAddresses(): void {
    this.checkoutStore.dispatch(loadAddresses());

    this.addresses$ = this.checkoutStore.pipe(
      select(selectAddresses),
      map(addresses => {
        if (addresses) {
          return addresses.map(address => ({
            ...address,
            type: CardTypes.Address,
            state: CardStates.EDIT,
          }));
        }
        return [];
      })
    );
  }

  ngOnInit() {
    this.getAddresses();
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private appStore: Store<AppState>,
    private checkoutStore: Store<CheckoutState>,
    private modalService: BsModalService
  ) { }

}
