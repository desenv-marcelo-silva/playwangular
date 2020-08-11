import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RestaurantService } from "./../restaurant/restaurant.service";

import { Restaurante } from "./../restaurant/restaurant-item/restaurant-item.model";

@Component({
  selector: "mt-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html",
})
export class RestaurantDetailComponent implements OnInit {
  restaurante: Restaurante;

  constructor(
    private restaurantServce: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantServce
      .restaurantById(this.route.snapshot.params["id"])
      .subscribe((restaurante) => (this.restaurante = restaurante));
  }
}
