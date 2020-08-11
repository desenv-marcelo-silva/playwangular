import { Component, OnInit } from "@angular/core";

import { ShoppingCartService } from "./shopping-cart.service";
import { CartItem } from "./cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  items(): CartItem[] {
    return this.shoppingCartService.items;
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

  addItem(item: MenuItem): void {
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item);
  }

  total(): number {
    return this.shoppingCartService.total();
  }
}
