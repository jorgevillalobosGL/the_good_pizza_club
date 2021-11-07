import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.router.module';

// Modules
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from '@app-shared/shared.module';

// Components
import { HomeHeaderComponent } from './home-header/home-header.component';
import { DayPromosSectionComponent } from './day-promos-section/day-promos-section.component';
import { PizzaCarouselSectionComponent } from './pizza-carousel-section/pizza-carousel-section.component';
import { CustomizePizzaFormComponent } from '../components/customize-pizza-form/customize-pizza-form.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    HomeRouterModule,
    ModalModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    DayPromosSectionComponent,
    CustomizePizzaFormComponent,
    PizzaCarouselSectionComponent,
  ]
})
export class HomeModule { }
