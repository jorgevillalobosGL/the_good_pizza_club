import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AddressModalComponent } from './address-modal.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from '../store/checkout.reducer';
import { CardStates, CardTypes } from '@app-shared/stories/address-credit-card/address-credit-card.component';

function getFakeAddressCardData() {
  return ({
    type: CardTypes.Address,
    state: CardStates.NEW,
    name: 'My Address Name',
    address: 'My Address',
    phone: '9823423423',
    isDefault: true,
  });
}

describe('Address Modal Component', () => {
  let component: AddressModalComponent;
  let fixture: any;
  let storeMock: any;

  beforeEach(async () => {
    storeMock = {
      dispatch: jasmine.createSpy('dispatch')
    };
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ 'checkout': reducer }),
      ],
      declarations: [AddressModalComponent],
      providers: [ FormBuilder, { provide: Store, useValue: storeMock } ]

    }).compileComponents();
    fixture = TestBed.createComponent(AddressModalComponent);
    component = fixture.componentInstance;
    component.addressForm = TestBed.get(FormBuilder).group({
      name: ['testName'],
      address: ['addressTest'],
      phone: ['54532332'],
      isDefault: [false],
    });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should gets return each form property', () => {
    expect(component.name.value).toBe('testName');
    expect(component.address.value).toBe('addressTest');
    expect(component.phone.value).toBe('54532332');
    expect(component.isDefault.value).toBe(false);
  });

  it('should fill form out if there is data', () => {
    component.data = getFakeAddressCardData();
    component['filloutForm']();
    expect(component.name.value).toBe('My Address Name');
    expect(component.address.value).toBe('My Address');
    expect(component.phone.value).toBe('9823423423');
  });

  it('should dispatch create new address if its state is ADD', () => {
    component.data = null;
    component.onSaveAddress();
    expect(storeMock.dispatch).toHaveBeenCalledWith(
      { payload: { name: 'testName', address: 'addressTest', phone: '54532332', isDefault: false }, type: '[checkout] create addresses' }
    );
  });

  it('should dispatch edit address if its state is EDIT', () => {
    component.data = getFakeAddressCardData();
    component.onSaveAddress();
    expect(storeMock.dispatch).toHaveBeenCalledWith(
      {
        payload:
        {
          index: undefined, address:
            { name: 'testName', address: 'addressTest', phone: '54532332', isDefault: false }
        }, type: '[checkout] edit address'
      }
    );
  });
});
