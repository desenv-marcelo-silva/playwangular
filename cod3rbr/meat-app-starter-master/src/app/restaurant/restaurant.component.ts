import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

import { RestaurantService } from "./restaurant.service";
import { Restaurante } from "./restaurant-item/restaurant-item.model";

@Component({
  selector: "mt-restaurant",
  templateUrl: "./restaurant.component.html",
  animations: [
    trigger("toggleSearch", [
      state(
        "hidden",
        style({
          opacity: 0,
          "max-height": 0,
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          "max-height": "70px",
          "margin-top": "20px",
        })
      ),
      transition("* => *", animate("250ms 0s ease-in-out")),
    ]),
  ],
})
export class RestaurantComponent implements OnInit {
  searchBarState = "hidden";
  restaurants: Restaurante[];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService
      .restaurants()
      .subscribe((listaRestaurante) => (this.restaurants = listaRestaurante));
  }

  toggleSearch(): void {
    this.searchBarState =
      this.searchBarState === "hidden" ? "visible" : "hidden";
  }
}
