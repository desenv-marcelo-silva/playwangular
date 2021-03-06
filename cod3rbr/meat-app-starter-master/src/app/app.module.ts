import { NgModule, LOCALE_ID, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt, "pt");

import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { HomeComponent } from "./home/home.component";

import { RestaurantComponent } from "./restaurant/restaurant.component";
import { RestaurantItemComponent } from "./restaurant/restaurant-item/restaurant-item.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";

import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { MenuItemComponent } from "./restaurant-detail/menu-item/menu-item.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";

import { ShoppingCartComponent } from "./restaurant-detail/shopping-cart/shopping-cart.component";

import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { SharedModule } from "./shared/shared.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./security/login/login.component";
import { UserDetailComponent } from "./header/user-detail/user-detail.component";

import { ApplicationErrorHandler } from "./app.error-handler";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantComponent,
    RestaurantItemComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" },
    { provide: ErrorHandler, useClass: ApplicationErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
