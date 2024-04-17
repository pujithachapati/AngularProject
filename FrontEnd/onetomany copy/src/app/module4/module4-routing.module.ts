import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailerComponent } from './retailer/retailer.component';
import { RetailerlistComponent } from './retailerlist/retailerlist.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';

const routes: Routes = [
  {path:'create',component:RetailerComponent},
  {path:'update/:id',component:RetailerComponent},
  {path:'retailerlist',component:RetailerlistComponent},
  {path:'vendorslist',component:VendorlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module4RoutingModule { }
