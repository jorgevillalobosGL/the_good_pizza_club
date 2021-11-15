import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import PizzaMenuCard from './pizza-menu-card.component';
import Button from '../button/button.component';
import IconButton from '../icon-button/icon-button.component';

export default {
  title: 'Components/Pizza-Menu-Card',
  component: PizzaMenuCard,
  decorators: [
    moduleMetadata({
      declarations: [Button, IconButton],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    bgColorGradientFrom: {
      control: { type: 'color' }
    },
    bgColorGradientTo: {
      control: { type: 'color' }
    },
  },
} as Meta;

const Template: Story<PizzaMenuCard> = (args: PizzaMenuCard) => ({
  props: args,
});

export const EggBasil = Template.bind({});
EggBasil.args = {
  bgColorGradientFrom: '#D9571F',
  bgColorGradientTo: '#F1C380',
  title: 'EGG & BASIL',
  numOfGrams: 540,
  numOfCalories: 1200,
  description: 'Our famous egg, basil, capers and black pepper. Don’t knock it ‘til you try it.',
  price: 14,
  cardBackgroundUrl: '/assets/images/egg-pizza.png'
};

export const VeggieBasil = Template.bind({});
VeggieBasil.args = {
  bgColorGradientFrom: '#8F9F19',
  bgColorGradientTo: '#D2DA99',
  title: 'VEGGIE FEST',
  numOfGrams: 520,
  numOfCalories: 1000,
  description: 'Mushrooms, purple basil, capers and our famous secret veggie mix.',
  price: 12,
  cardBackgroundUrl: '/assets/images/veggie-pizza.png'
};

export const tomato = Template.bind({});
tomato.args = {
  bgColorGradientFrom: '#D91F1F',
  bgColorGradientTo: '#F1A980',
  title: 'SALAMI & TOMATO',
  numOfGrams: 560,
  numOfCalories: 1500,
  description: 'What a perfect combination of salami, tomato wedges and sage. Tastes just like home.',
  price: 16,
  cardBackgroundUrl: '/assets/images/tomato-pizza.png'
};

export const pepperoni = Template.bind({});
pepperoni.args = {
  bgColorGradientFrom: '#46B88F',
  bgColorGradientTo: '#D0FD88',
  title: 'PEPPERONI & EGG',
  numOfGrams: 540,
  numOfCalories: 1200,
  description: 'Our famous egg, basil, capers and black pepper. Don’t knock it ‘til you try it.',
  price: 14,
  cardBackgroundUrl: '/assets/images/pepperoni-pizza.png'
};

export const salami = Template.bind({});
salami.args = {
  bgColorGradientFrom: '#D96D1F',
  bgColorGradientTo: '#F1D180',
  title: 'SALAMI & MUSHROOMS',
  numOfGrams: 560,
  numOfCalories: 1500,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: 16,
  cardBackgroundUrl: '/assets/images/mushrooms-pizza.png'
};

export const lives = Template.bind({});
lives.args = {
  bgColorGradientFrom: '#1B9F19',
  bgColorGradientTo: '#A6DA99',
  title: '‘LIVES & ‘SHROOMS',
  numOfGrams: 520,
  numOfCalories: 1000,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor augue cursus viverra. Urna.',
  price: 12,
  cardBackgroundUrl: '/assets/images/lives-pizza.png'
};

export const italian = Template.bind({});
italian.args = {
  bgColorGradientFrom: '#D91F1F',
  bgColorGradientTo: '#F19B80',
  title: 'ITALIAN-TICAN',
  numOfGrams: 540,
  numOfCalories: 1200,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu molestie massa odio nulla diam. At.',
  price: 14,
  cardBackgroundUrl: '/assets/images/italian-pizza.png'
};

export const supreme = Template.bind({});
supreme.args = {
  bgColorGradientFrom: '#199F7F',
  bgColorGradientTo: '#99DAC3',
  title: 'SUPREME STYLE',
  numOfGrams: 520,
  numOfCalories: 1000,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus libero vivamus nunc blandit.',
  price: 12,
  cardBackgroundUrl: '/assets/images/supreme-pizza.png'
};
