import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import axios from 'axios';


// zorro imports
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';




// Components
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GetStartedBtnComponent } from './Components/get-started-btn/get-started-btn.component';
import { ServiceCardComponent } from './Components/service-card/service-card.component';
import { LoginComponent } from './pages/login/login.component';

// Interceptors
import { AuthInterceptor } from './interceptors/auth-interceptor/auth-interceptor.service';
import { ErrorInterceptor } from './interceptors/error-interceptor/error-interceptor.service';
import { TokenInterceptor } from './interceptors/token-interceptor/token-interceptor.service';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page.component';
import { SplashLogoComponent } from './Components/splash-logo/splash-logo.component';
import { PageContainerComponent } from './pages/page-container/page-container.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { MapComponent } from './pages/map/map.component';
import { AccessibleSilosComponent } from './pages/accessible-silos/accessible-silos.component';
import { CurrentMenuComponent } from './pages/current-menu/current-menu.component';
import { HrEmployeesComponent } from './pages/hr-employees/hr-employees.component';
import { InventoryContainerComponent } from './pages/inventory-container/inventory-container.component';
import { CurrentInventoryComponent } from './Components/Inventory/current-inventory/current-inventory.component';
import { CurrentVendorOrdersComponent } from './Components/Inventory/current-vendor-orders/current-vendor-orders.component';

// Formly

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    GetStartedBtnComponent,
    ServiceCardComponent,
    CurrentVendorOrdersComponent,
    LoginComponent,
    SignupComponent,
    DashboardPageComponent,
    RedirectPageComponent,
    SplashLogoComponent,
    PageContainerComponent,
    LogoutPageComponent,
    MapComponent,
    AccessibleSilosComponent,
    CurrentInventoryComponent,
    CurrentMenuComponent,
    HrEmployeesComponent,
    InventoryContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzMessageModule,
    NzStepsModule,
    NzSpinModule,
    NzSelectModule,
    NzSwitchModule,
    NzCheckboxModule,
    NzTimePickerModule,
    NzRadioModule,
    NzUploadModule,
    NzMenuModule,
    NzDropDownModule,
    NzPopoverModule,
    NzTableModule,
    NzAvatarModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
