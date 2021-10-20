import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Stories
import Button from '../stories/button/button.component';
import IconButton from '../stories/icon-button/icon-button.component';
import Dropdown from '../stories/dropdown/dropdown.component';
import TextInput from '../stories/text-input/text-input.component';
import PizzaMenuCardComponent from '../stories/pizza-menu-card/pizza-menu-card.component';

const STORIES = [
  Button,
  Dropdown,
  TextInput,
  IconButton,
  PizzaMenuCardComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...STORIES],
  exports: [...STORIES]
})
export class SharedModule { }
