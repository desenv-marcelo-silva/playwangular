import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { RestaurantComponent } from "./restaurant/restaurant.component";
import { RestaurantItemComponent } from "./restaurant/restaurant-item/restaurant-item.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { RestaurantService } from "./restaurant/restaurant.service";

import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { MenuItemComponent } from "./restaurant-detail/menu-item/menu-item.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";

import { ShoppingCartComponent } from "./restaurant-detail/shopping-cart/shopping-cart.component";
import { ShoppingCartService } from "./restaurant-detail/shopping-cart/shopping-cart.service";
import { OrderComponent } from "./order/order.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantComponent,
    RestaurantItemComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    RestaurantService,
    {
      provide: ShoppingCartService,
      useClass: ShoppingCartService,
    } /* mesmo que apenas ShoppingCartService, como acontece no restaurante. Forma estendida */,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
