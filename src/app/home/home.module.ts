import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.router.module';
import { SharedModule } from '@app-shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRouterModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
