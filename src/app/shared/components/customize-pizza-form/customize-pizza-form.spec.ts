import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Product } from '@app-shared/models/general.model';
import { CustomizePizzaFormComponent } from './customize-pizza-form.component';
import { ToastrService } from 'ngx-toastr';

const TempExtraDefault = {
  drink:  { item: null, quantity: 0 },
  salad: { item: null, quantity: 0 },
  appetizer: { item: null, quantity: 0 },
  dessert: { item: null, quantity: 0 },
};

function getFakeProduct(): Product {
  return ({
    id: 1,
    name: 'Fake Product',
    price: 234,
    description: 'Fake Product Description',
    stock: 3,
  });
}


describe('Address / Credit Card Story', () => {
  const mockToastrService = {
    info: () => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, StoreModule.forRoot({})],
      declarations: [CustomizePizzaFormComponent],
      providers: [{ provide: ToastrService, useValue: mockToastrService}]
    }).compileComponents();
  });

  it('should save pizza ingredients when user select it', () => {
    const ingredientMock: Product = {
      id: 1,
      name: 'Tomato',
      description: '',
      price: 0.5,
      stock: 10
    };
    const fixture = TestBed.createComponent(CustomizePizzaFormComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    component.onSelectProduct('sauce', ingredientMock);
    expect(component.sauceField.value.item).toEqual(ingredientMock);
  });

  it('should save extra ingredients in Temporal state when user select it', () => {
    const ingredientMock = {
      id: 20,
      name: 'Dessert 1',
      price: 0.5
    };
    const fixture = TestBed.createComponent(CustomizePizzaFormComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    component.onExtraSelected('dessert', ingredientMock);
    expect(component['tempExtra'].dessert?.item).not.toEqual(null);
  });

  it('should gets return each form property', () => {
    const fixture = TestBed.createComponent(CustomizePizzaFormComponent);
    const component = fixture.componentInstance;
    component.customPizzaForm = TestBed.get(FormBuilder).group({
      size: ['large'],
      sauce: ['tomato'],
      cheese: ['mozzarella'],
      topping: ['pepino'],
      drink: ['coke'],
      salad: ['cucumber'],
      appetizer: ['salad'],
      dessert: ['cake'],
    });
    expect(component.sizeField.value).toBe('large');
    expect(component.sauceField.value).toBe('tomato');
    expect(component.cheeseField.value).toBe('mozzarella');
    expect(component.toppingField.value).toBe('pepino');
    expect(component.drinkField.value).toBe('coke');
    expect(component.saladField.value).toBe('cucumber');
    expect(component.appetizerField.value).toBe('salad');
    expect(component.dessertField.value).toBe('cake');
  });

  it('should get dropdown formated data', () => {
    const fixture = TestBed.createComponent(CustomizePizzaFormComponent);
    const component = fixture.componentInstance;
    const result = component.getDdValues([getFakeProduct()]);
    expect(result).toEqual([
      {
        value: 1,
        text: 'Fake Product',
        disabled: false
      }
    ]);
  });

  it('should get dropdown number array to display', () => {
    const fixture = TestBed.createComponent(CustomizePizzaFormComponent);
    const component = fixture.componentInstance;
    const result = component.getDdnumber(4);
    expect(result).toEqual([
      {
        value: 1,
        text: '1',
        disabled: false
      },
      {
        value: 2,
        text: '2',
        disabled: false
      },
      {
        value: 3,
        text: '3',
        disabled: false
      },
      {
        value: 4,
        text: '4',
        disabled: false
      }
    ]);
  });

  // it('should modify tempExtra product when add an Extra Selected', () => {
  // it('should 1', () => {
  //   const fixture = TestBed.createComponent(CustomizePizzaFormComponent);
  //   const component = fixture.componentInstance;
  //   component.tempExtra = {... TempExtraDefault };
  //   component.onExtraSelected('dessert', getFakeProduct());
  //   expect(component.tempExtra).toEqual(
  //     {
  //       drink:  { item: null, quantity: 0 },
  //       salad: { item: null, quantity: 0 },
  //       appetizer: { item: null, quantity: 0 },
  //       dessert: {
  //         item: { id: 1, name: 'Fake Product', price: 234, description: 'Fake Product Description', stock: 3 } as any,
  //         quantity: 0
  //       }
  //     }
  //   );
  // });

  // it('should 2', () => { // it('should modify tempExtra product when modify Extra quantity', () => {
  //   const fixture = TestBed.createComponent(CustomizePizzaFormComponent);
  //   const component = fixture.componentInstance;
  //   component.tempExtra = {... TempExtraDefault };
  //   component.onExtraQuantity(
  //     'salad',
  //     {
  //       value: 4,
  //       text: '4',
  //       disabled: false
  //     }
  //   );
  //   expect(component.tempExtra).toEqual(
  //     {
  //       drink: { item: null, quantity: 0 },
  //       salad: { item: null, quantity: 4 },
  //       appetizer: { item: null, quantity: 0 },
  //       dessert: { item: null, quantity: 0 }
  //     }
  //   );
  // });
});
