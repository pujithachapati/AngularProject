import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule
  ]
})
export class Module2Module { }
