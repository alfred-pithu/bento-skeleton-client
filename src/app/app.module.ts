import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';



// zorro imports
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { GetStartedBtnComponent } from './components/get-started-btn/get-started-btn.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { LoginComponent } from './pages/login/login.component';

// Interceptors
import { AuthInterceptor } from './interceptors/auth-interceptor/auth-interceptor.service';
import { ErrorInterceptor } from './interceptors/error-interceptor/error-interceptor.service';
import { TokenInterceptor } from './interceptors/token-interceptor/token-interceptor.service';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page.component';
import { SplashLogoComponent } from './components/splash-logo/splash-logo.component';
import { PageContainerComponent } from './pages/page-container/page-container.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { MapComponent } from './pages/map/map.component';
import { AccessibleSilosComponent } from './pages/accessible-silos/accessible-silos.component';
import { InventoryContainerComponent } from './pages/inventory-container/inventory-container.component';
import { CurrentInventoryComponent } from './components/inventory/current-inventory/current-inventory.component';
import { CurrentVendorOrdersComponent } from './components/inventory/current-vendor-orders/current-vendor-orders.component';
import { MostUsedIngredComponent } from './components/inventory/most-used-ingred/most-used-ingred.component';
import { MostWastedIngredComponent } from './components/inventory/most-wasted-ingred/most-wasted-ingred.component';
import { MenuContainerComponent } from './pages/menu-container/menu-container.component';
import { HrContainerComponent } from './pages/hr-container/hr-container.component';
import { OrdersContainerComponent } from './pages/orders-container/orders-container.component';
import { FullMenuComponent } from './components/menu/full-menu/full-menu.component';
import { MostSoldItemComponent } from './components/menu/most-sold-item/most-sold-item.component';
import { AllEmployeesComponent } from './components/hr/all-employees/all-employees.component';
import { OrdersServedRankingComponent } from './components/hr/orders-served-ranking/orders-served-ranking.component';
import { MostProfitableItemComponent } from './components/menu/most-profitable-item/most-profitable-item.component';
import { ControlPanelContainerComponent } from './pages/control-panel-container/control-panel-container.component';
import { ControlMenuItemVisibilityComponent } from './components/control-panel/control-menu-item-visibility/control-menu-item-visibility.component';
import { RestaurantVisibilityInMarketplaceComponent } from './components/control-panel/restaurant-visibility-in-marketplace/restaurant-visibility-in-marketplace.component';
import { SetDiscountComponent } from './components/control-panel/set-discount/set-discount.component';
import { MarketplaceAllOrdersComponent } from './components/orders/marketplace-all-orders/marketplace-all-orders.component';
import { PosAllOrdersComponent } from './components/orders/pos-all-orders/pos-all-orders.component';


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
    InventoryContainerComponent,
    MostUsedIngredComponent,
    MostWastedIngredComponent,
    MenuContainerComponent,
    HrContainerComponent,
    OrdersContainerComponent,
    FullMenuComponent,
    MostSoldItemComponent,
    AllEmployeesComponent,
    OrdersServedRankingComponent,
    MostProfitableItemComponent,
    ControlPanelContainerComponent,
    ControlMenuItemVisibilityComponent,
    RestaurantVisibilityInMarketplaceComponent,
    SetDiscountComponent,
    MarketplaceAllOrdersComponent,
    PosAllOrdersComponent
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
    NzAvatarModule,
    NgApexchartsModule,
    NzModalModule
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
