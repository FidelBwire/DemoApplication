import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsComponent } from './pages/products/products.component';
import { InsuranceComponent } from './pages/products/insurance/insurance.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PosComponent } from './pages/products/pos/pos.component';
import { RetailComponent } from './pages/products/retail/retail.component';


@NgModule({
  declarations: [
    SiteComponent,
    NavigationComponent,
    ProductsComponent,
    InsuranceComponent,
    HomeComponent,
    AboutUsComponent,
    PosComponent,
    RetailComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
