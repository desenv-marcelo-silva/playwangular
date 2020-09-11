import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { MEAT_API } from "./../app.api";

import { ShoppingCartService } from "./../restaurant-detail/shopping-cart/shopping-cart.service";
import { LoginService } from "../security/login/login.service";

import { CartItem } from "./../restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";

@Injectable()
export class OrderService {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private loginService: LoginService,
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
    let headers = new HttpHeaders();
    if (this.loginService.isLoggedIn()) {
      headers = headers.set(
        "Authorization",
        `Bearer ${this.loginService.user.accessToken}`
      );
    }

    return this.http
      .post<Order>(`${MEAT_API}/orders`, order, { headers })
      .map((order) => order.id);
  }

  clear() {
    this.shoppingCartService.clear();
  }
}
