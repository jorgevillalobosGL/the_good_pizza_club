import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Dropdown from './dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }),
  ],
} as Meta;

const Template: Story<Dropdown> = (args: Dropdown) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  dropdownValues: [
    {
      value: '1',
      text: 'Item One',
      disabled: false,
    },
    {
      value: '2',
      text: 'Item Two',
      disabled: false,
    },
    {
      value: '3',
      text: 'Item Three',
      disabled: false,
    },
  ],
};
