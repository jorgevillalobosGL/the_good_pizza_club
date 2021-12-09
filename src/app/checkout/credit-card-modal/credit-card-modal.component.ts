import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createCreditCard } from '../store/checkout.actions';
import { CheckoutState } from '../store/checkout.reducer';

@Component({
  selector: 'app-credit-card-modal',
  templateUrl: './credit-card-modal.component.html',
  styleUrls: ['./credit-card-modal.component.scss']
})
export class CreditCardModalComponent implements OnInit {

  @Input() index: number | null;
  @Output() onClose = new EventEmitter<Event>();

  public creditCardForm: FormGroup;

  public get title(): FormControl {
    return this.creditCardForm.get('title') as FormControl;
  }

  public get content1(): FormControl {
    return this.creditCardForm.get('content1') as FormControl;
  }

  public get content2(): FormControl {
    return this.creditCardForm.get('content2') as FormControl;
  }

  public get isDefault(): FormControl {
    return this.creditCardForm.get('isDefault') as FormControl;
  }

  public onSaveCreditCard() {
    this.checkoutStore.dispatch(createCreditCard({
      payload: this.creditCardForm.getRawValue()
    }));
    this.onClose.emit();
  }

  private initForm(): void {
    this.creditCardForm = this.formBuilder.group({
      title: [''],
      content1: [''],
      content2: [''],
      isDefault: [false],
    });
  }

  ngOnInit() {
    this.initForm();
  }

  constructor(
    private formBuilder: FormBuilder,
    private checkoutStore: Store<CheckoutState>
  ) { }

}
