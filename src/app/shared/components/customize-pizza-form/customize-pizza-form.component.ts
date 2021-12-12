import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { fetchProductsCatalog, saveShoppingCard } from '../../../store/app.actions';
import { AppState, selectProductCatalog } from '../../../store/app.reducer';
import { DropdownValue, Product, ProductsCatalog, ShoppingCardItem } from '@app-shared/models/general.model';
import { ToastrService } from 'ngx-toastr';

enum ExtraType {
  drink= 'drink',
  salad= 'salad',
  appetizer= 'appetizer',
  dessert= 'dessert',
}

const TempExtraDefault = {
  drink:  { item: null, quantity: 0 },
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
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() addToCard = new EventEmitter<ShoppingCardItem[]>();
  public customPizzaForm: FormGroup;
  public reset$ = new BehaviorSubject(false);
  public products$: Observable<ProductsCatalog>;
  public tempExtra = { ...TempExtraDefault };

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
      value: product.id || 0,
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
    const cardProduct = {item: product, quantity: 1};
    this.customPizzaForm.get(category)?.setValue(cardProduct);
    this.toastr.info('item Added');
  }

  public onExtraSelected(extra: string, item: any) {
    this.tempExtra[<ExtraType>extra].item = item;
  }

  public onExtraQuantity(extra: string, item: DropdownValue) {
    this.tempExtra[<ExtraType>extra].quantity = +item.value;
  }

  public onAddExtra(extra: string) {
    const extraTobeAdded = this.tempExtra[<ExtraType>extra];
    if (extraTobeAdded.item && extraTobeAdded.quantity) {
      this.customPizzaForm.get(extra)?.setValue(extraTobeAdded);
      this.toastr.info('item Added');
    } else {
      this.toastr.error('Please select an item and quantity');
    }
  }

  public onRestart() {
    this.reset$.next(true);
    this.customPizzaForm.reset();
    this.tempExtra = { ...TempExtraDefault };
  }

  public onAddToCard() {
    const shoppingCard: ShoppingCardItem[] = [];
    const selectedProducts = this.customPizzaForm.getRawValue();
    Object.keys(selectedProducts).forEach(key => {
      if (selectedProducts[key]) {
        shoppingCard.push(selectedProducts[key]);
      }
    });
    if (!shoppingCard.length) {
      this.toastr.error('Please select at least one item');
      return;
    }
    this.appStore.dispatch(saveShoppingCard({
      payload: shoppingCard
    }));
    this.closeModal.emit(true);
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
    private appStore: Store<AppState>,
    private toastr: ToastrService,
  ) { }
}
