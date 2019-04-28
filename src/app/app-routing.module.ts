import { LoginComponent } from './Page/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './Page/tables/tables.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Tables',
    canActivate: [AuthGuard],
    component: TablesComponent
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
