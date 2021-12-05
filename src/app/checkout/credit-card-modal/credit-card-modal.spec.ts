import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from '../store/checkout.reducer';
import { CardStates, CardTypes } from '@app-shared/stories/address-credit-card/address-credit-card.component';
import { CreditCardModalComponent } from './credit-card-modal.component';

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
  let component: CreditCardModalComponent;
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
      declarations: [CreditCardModalComponent],
      providers: [ FormBuilder, { provide: Store, useValue: storeMock } ]

    }).compileComponents();
    fixture = TestBed.createComponent(CreditCardModalComponent);
    component = fixture.componentInstance;
    component.creditCardForm = TestBed.get(FormBuilder).group({
      title: ['credit title'],
      content1: ['Content 1'],
      content2: ['Content 2'],
      isDefault: [false],
    });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should gets return each form property', () => {
    expect(component.title.value).toBe('credit title');
    expect(component.content1.value).toBe('Content 1');
    expect(component.content2.value).toBe('Content 2');
    expect(component.isDefault.value).toBe(false);
  });

  it('should dispatch create new credit card', () => {
    component.onSaveCreditCard();
    expect(storeMock.dispatch).toHaveBeenCalledWith(
      {
        payload:
          { title: 'credit title', content1: 'Content 1', content2: 'Content 2', isDefault: false },
        type: '[checkout] create credit cards'
      }
    );
  });
});

