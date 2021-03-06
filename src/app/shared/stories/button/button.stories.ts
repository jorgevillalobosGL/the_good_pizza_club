// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  label: 'CUSTOMIZE YOUR OWN',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'CUSTOMIZE YOUR OWN',
  type: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'CUSTOMIZE YOUR OWN',
  type: 'success',
};
