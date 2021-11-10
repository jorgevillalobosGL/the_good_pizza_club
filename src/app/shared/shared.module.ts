import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Stories
import Button from './stories/button/button.component';
import Header from './stories/header/header.component';
import Dropdown from './stories/dropdown/dropdown.component';
import TextInput from './stories/text-input/text-input.component';
import IconButton from './stories/icon-button/icon-button.component';
import PromotionCard from './stories/promotion-card//promotion-card.component';
import PizzaMenuCard from './stories/pizza-menu-card/pizza-menu-card.component';
const STORIES = [
  Header,
  Button,
  Dropdown,
  PromotionCard,
  TextInput,
  IconButton,
  PizzaMenuCard
];
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...STORIES],
  exports: [...STORIES]
})
export class SharedModule { }
