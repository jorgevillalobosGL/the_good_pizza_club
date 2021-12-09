import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddressCard } from '@app-shared/models/general.model';
import { createAddresses, editAddresses } from '../store/checkout.actions';
import { CheckoutState } from '../store/checkout.reducer';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent implements OnInit {
  @Input() data: AddressCard | null;
  @Input() index: number | null;
  @Output() onClose = new EventEmitter<Event>();

  public addressForm: FormGroup;

  public get name(): FormControl {
    return this.addressForm.get('name') as FormControl;
  }

  public get address(): FormControl {
    return this.addressForm.get('address') as FormControl;
  }

  public get phone(): FormControl {
    return this.addressForm.get('phone') as FormControl;
  }

  public get isDefault(): FormControl {
    return this.addressForm.get('isDefault') as FormControl;
  }

  public onSaveAddress() {
    if(!this.data){
      this.checkoutStore.dispatch(createAddresses({
        payload: this.addressForm.getRawValue()
      }));
    }
    else {
      this.checkoutStore.dispatch(editAddresses({
        payload: {
          index: this.index,
          address: this.addressForm.getRawValue()
        }
      }));
    }
    this.onClose.emit();
  }

  private initForm(): void {
    this.addressForm = this.formBuilder.group({
      name: [''],
      address: [''],
      phone: [''],
      isDefault: [false],
    });
  }

  private filloutForm() {
    if (!!this.data) {
      this.addressForm.patchValue(this.data);
    }
  }

  ngOnInit() {
    this.initForm();
    this.filloutForm();
  }

  constructor(
    private formBuilder: FormBuilder,
    private checkoutStore: Store<CheckoutState>
  ) { }

}

