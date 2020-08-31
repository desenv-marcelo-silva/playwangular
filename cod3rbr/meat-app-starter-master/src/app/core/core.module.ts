import { NgModule } from "@angular/core";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurant/restaurant.service";
import { OrderService } from "app/order/order.service";

@NgModule({
  providers: [OrderService, RestaurantService, ShoppingCartService],
})
export class CoreModule {}
