import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Stories
import Button from '../stories/button/button.component';
import Dropdown from '../stories/dropdown/dropdown.component';
import TextInput from '../stories/text-input/text-input.component';

const STORIES = [
  Button,
  Dropdown,
  TextInput
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...STORIES],
  exports: [...STORIES]
})
export class SharedModule { }
