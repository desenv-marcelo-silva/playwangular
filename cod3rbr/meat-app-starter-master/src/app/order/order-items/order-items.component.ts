import { Component, OnInit, Input, EventEmitter } from "@angular/core";

import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Component({
  selector: "mt-order-items",
  templateUrl: "./order-items.component.html",
})
export class OrderItemsComponent implements OnInit {
  @Input() items: CartItem[];

  @Input() increaseQty = new EventEmitter<CartItem>();
  @Input() decreaseQty = new EventEmitter<CartItem>();
  @Input() remove = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit() {}

  emitIncreaseQty(item: CartItem): void {
    this.increaseQty.emit(item);
  }

  emitDereaseQty(item: CartItem): void {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItem): void {
    this.remove.emit(item);
  }
}
