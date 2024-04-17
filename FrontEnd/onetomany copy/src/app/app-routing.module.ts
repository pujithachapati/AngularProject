import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'createproduct',loadChildren:()=>import('./module1/module1.module')
    .then(mod=>mod.Module1Module),
    canActivate:[AuthGuard]
  },
  {path:'productlist',loadChildren:()=>import('./module2/module2.module')
    .then(mod=>mod.Module2Module),
    canActivate:[AuthGuard]
  },
  {
    path:'createshop',loadChildren:()=>import('./module3/module3.module')
    .then(mod=>mod.Module3Module),
    canActivate:[AuthGuard]
  },
  {path:'createretailer',loadChildren:()=>import('./module4/module4.module')
    .then(mod=>mod.Module4Module),
    canActivate:[AuthGuard]
  },
  {path:'vendor',loadChildren:()=>import('./module4/module4.module')
    .then(mod=>mod.Module4Module),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
