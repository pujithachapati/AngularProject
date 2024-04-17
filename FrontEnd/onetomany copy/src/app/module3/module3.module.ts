import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ShopComponent,
    ShoplistComponent
  ],
  imports: [
    CommonModule,
    Module3RoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class Module3Module { }
