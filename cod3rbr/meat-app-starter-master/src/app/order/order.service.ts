import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { MEAT_API } from "./../app.api";

import { ShoppingCartService } from "./../restaurant-detail/shopping-cart/shopping-cart.service";

import { CartItem } from "./../restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";

@Injectable()
export class OrderService {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private http: HttpClient
  ) {}

  itemsValue(): number {
    return this.shoppingCartService.total();
  }

  cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQty(item: CartItem) {
    this.shoppingCartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.shoppingCartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.shoppingCartService.remove(item);
  }

  checkOrder(order: Order): Observable<string> {
    return this.http
      .post<Order>(`${MEAT_API}/orders`, order)
      .pipe(map((order) => order.id));
  }

  clear() {
    this.shoppingCartService.clear();
  }
}
