import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { fetchProductsCatalog } from '../../../store/app.actions';
import { AppState, selectProductCatalog } from '../../../store/app.reducer';
import { DropdownValue, Product, ProductsCatalog } from '@app-shared/models/general.model';

enum ExtraType {
  drink= 'drink',
  salad= 'salad',
  appetizer= 'appetizer',
  dessert= 'dessert',
}

const TempExtraDefault = {
  drink: { item: null, quantity: 0 },
  salad: { item: null, quantity: 0 },
  appetizer: { item: null, quantity: 0 },
  dessert: { item: null, quantity: 0 },
};
@Component({
  selector: 'app-customize-pizza-form',
  templateUrl: './customize-pizza-form.component.html',
  styleUrls: ['./customize-pizza-form.component.scss']
})
export class CustomizePizzaFormComponent implements OnInit{
  public reset$ = new BehaviorSubject(false);
  public customPizzaForm: FormGroup;
  private tempExtra = { ...TempExtraDefault };
  public products$: Observable<ProductsCatalog>;

  public get sizeField(): FormControl {
    return this.customPizzaForm.get('size') as FormControl;
  }

  public get sauceField(): FormControl {
    return this.customPizzaForm.get('sauce') as FormControl;
  }

  public get cheeseField(): FormControl {
    return this.customPizzaForm.get('cheese') as FormControl;
  }

  public get toppingField(): FormControl {
    return this.customPizzaForm.get('topping') as FormControl;
  }

  public get drinkField(): FormControl {
    return this.customPizzaForm.get('drink') as FormControl;
  }

  public get saladField(): FormControl {
    return this.customPizzaForm.get('salad') as FormControl;
  }

  public get appetizerField(): FormControl {
    return this.customPizzaForm.get('appetizer') as FormControl;
  }

  public get dessertField(): FormControl {
    return this.customPizzaForm.get('dessert') as FormControl;
  }

  public getDdValues(productList: Product[]): DropdownValue[] {
    return productList.map(product => ({
      value: product.id,
      text: product.name,
      disabled: false
    }));
  }

  public getDdnumber(quantity: number): DropdownValue[] {
    const ddValues: DropdownValue[] = [];
    for (let i = 0; i < quantity; i++) {
      ddValues.push({
        value: i + 1,
        text: `${i + 1}`,
        disabled: false
      });
    }
    return ddValues;
  }

  public onSelectProduct(category: string, product: Product) {
    this.customPizzaForm.get(category)?.setValue(product);
  }

  public onExtraSelected(extra: string, item: any) {
    this.tempExtra[<ExtraType>extra].item = item;
  }

  public onExtraQuantity(extra: string, item: DropdownValue) {
    this.tempExtra[<ExtraType>extra].quantity = +item.value;
  }

  public onAddExtra(extra: string) {
    const extraTobeAdded = this.tempExtra[<ExtraType>extra];
    this.customPizzaForm.get(extra)?.setValue(extraTobeAdded);
  }

  public onRestart() {
    this.reset$.next(true);
    this.customPizzaForm.reset();
    this.tempExtra = { ...TempExtraDefault };
  }

  private initForm(): void {
    this.customPizzaForm = this.formBuilder.group({
      size: [],
      sauce: [],
      cheese: [],
      topping: [],
      drink: [],
      salad: [],
      appetizer: [],
      dessert: []
    });
  }

  private subscribeProductCatalog(): void {
    this.products$ = this.appStore.pipe(
      select(selectProductCatalog)
    );
  }

  public ngOnInit() {
    this.initForm();
    this.appStore.dispatch(fetchProductsCatalog());
    this.subscribeProductCatalog();
  };

  constructor(
    private formBuilder: FormBuilder,
    private appStore: Store<AppState>
  ) { }
}
