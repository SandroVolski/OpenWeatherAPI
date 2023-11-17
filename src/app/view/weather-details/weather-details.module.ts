import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherDetailsPageRoutingModule } from './weather-details-routing.module';

import { WeatherDetailsPage } from './weather-details.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherDetailsPageRoutingModule
  ],
  declarations: [WeatherDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeatherDetailsPageModule {}
