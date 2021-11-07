import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.router.module';

// Modules
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from '@app-shared/shared.module';
// Components
import { HomeHeaderComponent } from './home-header/home-header.component';
import { DayPromosSectionComponent } from './day-promos-section/day-promos-section.component';
import { PizzaCarouselSectionComponent } from './pizza-carousel-section/pizza-carousel-section.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    HomeRouterModule,
  ],
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    DayPromosSectionComponent,
    PizzaCarouselSectionComponent,
  ]
})
export class HomeModule { }
