import { Story, Meta } from '@storybook/angular/types-6-0';
import SearchInput from './search-input.component';

export default {
  title: 'Components/Search-Input',
  component: SearchInput,
} as Meta;

const Template: Story<SearchInput> = (args: SearchInput) => ({
  props: args,
});

export const Search = Template.bind({});
Search.args = {
  type: 'search'
};

export const Address = Template.bind({});
Address.args = {
  type: 'address'
};
