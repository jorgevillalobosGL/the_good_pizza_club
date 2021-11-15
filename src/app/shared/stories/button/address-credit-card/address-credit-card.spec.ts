import { TestBed } from '@angular/core/testing';
import AddressCreditCardComponent, {
  CardStates,
  CardTypes,
} from './address-credit-card.component';

describe('Address / Credit Card Story', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AddressCreditCardComponent],
    }).compileComponents();
  });

  describe('Address Card', () => {
    it('should display correct footer text if it is Edit and Default', () => {
      const fixture = TestBed.createComponent(AddressCreditCardComponent);
      const component = fixture.componentInstance;
      component.type = CardTypes.Address;
      component.isDefault = true;
      component.state = CardStates.EDIT;
      expect(component.footerText).toEqual('Default address');
    });

    it('should display correct footer text if it is Edit and Not Default', () => {
      const fixture = TestBed.createComponent(AddressCreditCardComponent);
      const component = fixture.componentInstance;
      component.type = CardTypes.Address;
      component.isDefault = false;
      component.state = CardStates.EDIT;
      expect(component.footerText).toEqual('Make Favorite');
    });

    it('should display correct footer text if will Add a new Address', () => {
      const fixture = TestBed.createComponent(AddressCreditCardComponent);
      const component = fixture.componentInstance;
      component.type = CardTypes.Address;
      component.state = CardStates.NEW;
      expect(component.footerText).toEqual('Add new address');
    });
  });

  describe('Credit Card', () => {
    it('should display correct footer text if it is Edit and Default', () => {
      const fixture = TestBed.createComponent(AddressCreditCardComponent);
      const component = fixture.componentInstance;
      component.type = CardTypes.Credit;
      component.isDefault = true;
      component.state = CardStates.EDIT;
      expect(component.footerText).toEqual('Using this card');
    });

    it('should display correct footer text if it is Edit and Not Default', () => {
      const fixture = TestBed.createComponent(AddressCreditCardComponent);
      const component = fixture.componentInstance;
      component.type = CardTypes.Credit;
      component.isDefault = false;
      component.state = CardStates.EDIT;
      expect(component.footerText).toEqual('Use this card');
    });

    it('should display correct footer text if will Add a new Credit Card', () => {
      const fixture = TestBed.createComponent(AddressCreditCardComponent);
      const component = fixture.componentInstance;
      component.type = CardTypes.Credit;
      component.state = CardStates.NEW;
      expect(component.footerText).toEqual('Add payment method');
    });
  });
});
