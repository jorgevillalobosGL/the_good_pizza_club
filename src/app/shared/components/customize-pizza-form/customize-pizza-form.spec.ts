import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Product } from '@app-shared/models/general.model';
import { CustomizePizzaFormComponent } from './customize-pizza-form.component';
import { ToastrService } from 'ngx-toastr';


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
});
