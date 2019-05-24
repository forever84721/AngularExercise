import { LoginComponent } from './Page/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './Page/tables/tables.component';
import { AuthGuard } from './auth/auth.guard';
import { OrderComponent } from './Page/order/order.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
    data: { keep: true }
  },
  {
    path: 'Tables',
    canActivate: [AuthGuard],
    component: TablesComponent,
    data: { keep: true }
  },
  {
    path: 'Order',
    canActivate: [AuthGuard],
    component: OrderComponent,
    data: { keep: true }
  },
  {
    path: '**',
    redirectTo: 'Login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
