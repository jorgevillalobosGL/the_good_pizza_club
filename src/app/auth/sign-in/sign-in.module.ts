import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';

// Share
import { SharedModule } from '@app-shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
