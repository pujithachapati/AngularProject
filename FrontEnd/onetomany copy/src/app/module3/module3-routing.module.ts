import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ShoplistComponent } from './shoplist/shoplist.component';

const routes: Routes = [
  {path:'shop',component:ShopComponent},
  {path:'update/:id',component:ShopComponent},
  {path:'list',component:ShoplistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
