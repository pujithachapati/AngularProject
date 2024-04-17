import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module4RoutingModule } from './module4-routing.module';
import { VendorComponent } from './vendor/vendor.component';
import { RetailerComponent } from './retailer/retailer.component';
import { RetailerlistComponent } from './retailerlist/retailerlist.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    VendorComponent,
    RetailerComponent,
    RetailerlistComponent,
    VendorlistComponent,
  ],
  imports: [
    CommonModule,
    Module4RoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule
  ]
})
export class Module4Module { }
