import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import PromotionCard from './promotion-card.component';
import IconButton from '../icon-button/icon-button.component';

export default {
  title: 'Components/Promotion-Card',
  component: PromotionCard,
  decorators: [
    moduleMetadata({
      declarations: [IconButton],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<PromotionCard> = (args: PromotionCard) => ({
  props: args,
});

export const Promotion1 = Template.bind({});
Promotion1.args = {
  bgColor: '#284B56',
  mainTitle: '33% OFF',
  secondTitle: 'WALNUT & FRESNO CHILLI'
};

export const Promotion2 = Template.bind({});
Promotion2.args = {
  bgColor: '#380A48',
  showDecorators: true,
  mainTitle: '2 x 1 Fridays',
  secondTitle: 'TOMATO & BASIL',
  description: 'On medium size pizzas with no additional toppings.'
};
