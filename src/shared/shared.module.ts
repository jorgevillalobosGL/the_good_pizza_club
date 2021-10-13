import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Stories
import Button from '../stories/button/button.component';
import Dropdown from '../stories/dropdown/dropdown.component';

const STORIES = [
  Button,
  Dropdown
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...STORIES],
  exports: [...STORIES]
})
export class SharedModule { }
