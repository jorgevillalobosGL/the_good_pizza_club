import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Stories
import Button from '../stories/button/button.component';

const STORIES = [
  Button
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...STORIES],
  exports: [...STORIES]
})
export class SharedModule { }
