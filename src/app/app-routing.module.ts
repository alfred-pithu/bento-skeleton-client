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

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },
  { path: 'logout', component: LogoutPageComponent, canActivate: [authGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [noAuthGuard] },
  { path: 'redirect', component: RedirectPageComponent },
  { path: '', component: PageContainerComponent, canActivate: [authGuard], children: [
    { path: 'dashboard', component: DashboardPageComponent },
    { path: '**', redirectTo: '/home'}
  ]},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
