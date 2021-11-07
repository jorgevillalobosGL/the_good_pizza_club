import { fakeAsync, TestBed } from '@angular/core/testing';
import { PizzaCarouselSectionComponent } from './pizza-carousel-section.component';

describe('Address / Credit Card Story', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [PizzaCarouselSectionComponent],
    }).compileComponents();
  });
  it('should split the Pizza List in Groups of 3', fakeAsync(() => {
    const fixture = TestBed.createComponent(PizzaCarouselSectionComponent);
    const component = fixture.componentInstance;
    // eslint-disable-next-line no-use-before-define
    component['pizzaCarouselList$'].next(getListOfPizzas(7));
    component.pizzaCarouselOptions$.subscribe(options => {
      expect(options.length).toEqual(3);
      expect(options[0].length).toEqual(3);
      expect(options[1].length).toEqual(3);
      expect(options[2].length).toEqual(1);
    });
  }));
});

function getListOfPizzas(length: number) {
  const list = [];
  const pizza = {
    bgColorGradientFrom: '#46B88F',
    bgColorGradientTo: '#D0FD88',
    title: 'PEPPERONI & EGG',
    numOfGrams: 540,
    numOfCalories: 1200,
    description: 'Our famous egg, basil, capers and black pepper. Don’t knock it ‘til you try it.',
    price: 14,
    cardBackgroundUrl: 'assets/images/pepperoni-pizza.png'
  };
  for (let i = 0; i < length; i++) {
    list.push(pizza);
  }
  return list;
};
