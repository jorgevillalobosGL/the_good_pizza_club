// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import IconButton from './icon-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Icon-Button',
  component: IconButton,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<IconButton> = (args: IconButton) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  label: 'ADD TO CART',
  showIcon: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ADD TO CART',
  type: 'secondary',
  showIcon: true
};

export const Success = Template.bind({});
Success.args = {
  label: 'ADD TO CART',
  type: 'success',
  showIcon: true
};
