import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { CarSaleComponent } from './car-sale/car-sale.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponentComponent, CarSaleComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
