// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import TextInput from './text-input.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Text-Input',
  component: TextInput,
  argTypes: {
    state: {
      options: ['success', 'danger'],
      control: { type: 'select' }
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TextInput> = (args: TextInput) => ({
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  placeholder: 'Text',
  type: 'text'
};

export const Email = Template.bind({});
Email.args = {
  placeholder: 'Email',
  type: 'email'
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Password',
  type: 'password'
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  type: 'text',
  disabled: true
};

export const State_Success = Template.bind({});
State_Success.args = {
  placeholder: 'State_Success',
  type: 'text',
  state: 'success'
};

export const State_Danger = Template.bind({});
State_Danger.args = {
  placeholder: 'State_Danger',
  type: 'text',
  state: 'danger'
};
