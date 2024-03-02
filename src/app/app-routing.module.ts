import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page.component';
import { PageContainerComponent } from './pages/page-container/page-container.component';
import { authGuard } from './guards/auth/auth.guard';
import { noAuthGuard } from './guards/no-auth/no-auth.guard';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { MapComponent } from './pages/map/map.component';
import { AccessibleSilosComponent } from './pages/accessible-silos/accessible-silos.component';
import { InventoryContainerComponent } from './pages/inventory-container/inventory-container.component';
import { MenuContainerComponent } from './pages/menu-container/menu-container.component';
import { HrContainerComponent } from './pages/hr-container/hr-container.component';
import { OrdersContainerComponent } from './pages/orders-container/orders-container.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'logout', component: LogoutPageComponent, canActivate: [authGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [noAuthGuard] },
  { path: 'map', component: MapComponent },

  { path: 'redirect', component: RedirectPageComponent },
  {
    path: '', component: PageContainerComponent, canActivate: [authGuard], children: [
      {
        path: 'dashboard', component: DashboardPageComponent, children: [
          { path: '', redirectTo: 'accessible-silos', pathMatch: 'full' }, // Redirect /dashboard to /dashboard/accessible-silos
          { path: 'accessible-silos', component: AccessibleSilosComponent },
          { path: 'inventory', component: InventoryContainerComponent },
          { path: 'menu', component: MenuContainerComponent },
          { path: 'hr', component: HrContainerComponent },
          { path: 'orders', component: OrdersContainerComponent }
        ]
      },
      { path: '**', redirectTo: '/home' }
    ]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
