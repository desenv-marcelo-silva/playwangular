import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

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
import { CoreModule } from "./core/core.module";

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
