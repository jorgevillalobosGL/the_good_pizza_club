import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomizePizzaFormComponent } from './customize-pizza-form.component';

describe('Address / Credit Card Story', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CustomizePizzaFormComponent],
    }).compileComponents();
  });

  it('should save pizza ingredients when user select it', () => {
    const ingredientMock = {
      id: 1,
      name: 'Tomato',
      price: 0.5
    };
    const fixture = TestBed.createComponent(CustomizePizzaFormComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    component.onSelectProduct('sauce', ingredientMock);
    expect(component.sauceField.value).toEqual(ingredientMock);
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
});
