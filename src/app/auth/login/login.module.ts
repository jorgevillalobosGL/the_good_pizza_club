import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

// Share
import { SharedModule } from '@app-shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
