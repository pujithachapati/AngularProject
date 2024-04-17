import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { Module1RoutingModule } from './module1-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { PopupComponent } from './component/popup/popup.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CreateProductComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule
  ]
})
export class Module1Module { }
