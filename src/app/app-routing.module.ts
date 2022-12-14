import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { CarSaleComponent } from './car-sale/car-sale.component';
const routes: Routes = [
  {
    path: 'car-sale',
    component: CarSaleComponent,
  },
  { path: 'detail-car', component: DetailCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
