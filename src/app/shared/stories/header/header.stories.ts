import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from '../button/button.component';
import Header from './header.component';
import {RouterModule} from '@angular/router';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule, RouterModule],
    }),
  ],
} as Meta;

const Template: Story<Header> = (args: Header) => ({
  props: args,
});

export const header = Template.bind({});
header.args = {
  menuItems: [
    {
      name: 'Menu',
      url: 'home',
    },
    {
      name: 'About Us',
      url: 'about-us',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
    {
      name: 'Login / Sign up',
      url: '/auth',
    },
    {
      name: 'Help',
      url: '/help',
    },
    {
      name: '',
      url: '/shopping',
      icon: 'icon-shopping',
    },
  ],
  linkActive: 'home'
};
