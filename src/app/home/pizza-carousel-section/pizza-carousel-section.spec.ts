import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { PizzaCarouselSectionComponent } from './pizza-carousel-section.component';
import { reducer } from '../../store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../../store/app.effects';

describe('Address / Credit Card Story', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({app: reducer}), EffectsModule.forRoot([AppEffects]),],
      declarations: [PizzaCarouselSectionComponent],

    }).compileComponents();
  });
  it('should split the Pizza List in Groups of 3', fakeAsync(() => {
    const fixture = TestBed.createComponent(PizzaCarouselSectionComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    component.pizzaCarouselList$.subscribe(options => {
      expect(options.length).toEqual(3);
      expect(options[0].length).toEqual(3);
      expect(options[1].length).toEqual(3);
      expect(options[2].length).toEqual(2);
    });
    flush();
  }));
});
