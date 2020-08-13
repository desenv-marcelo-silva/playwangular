import { CartItem } from "./../restaurant-detail/shopping-cart/cart-item.model";
import { OrderService } from "./order.service";
import { Component, OnInit } from "@angular/core";

import { RadioOption } from "./../shared/radio/radio-option.model";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" },
  ];
  constructor(private orderService: OrderService) {}

  ngOnInit() {}

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    console.log("chegou no order component");
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }
}
