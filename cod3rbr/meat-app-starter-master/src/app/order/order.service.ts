import { CartItem } from "./../restaurant-detail/shopping-cart/cart-item.model";
import { Injectable } from "@angular/core";

import { ShoppingCartService } from "./../restaurant-detail/shopping-cart/shopping-cart.service";

@Injectable()
export class OrderService {
  constructor(private shoppingCartService: ShoppingCartService) {}

  cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQty(item: CartItem) {
    console.log("chegou no order service");
    this.shoppingCartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.shoppingCartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.shoppingCartService.remove(item);
  }
}
