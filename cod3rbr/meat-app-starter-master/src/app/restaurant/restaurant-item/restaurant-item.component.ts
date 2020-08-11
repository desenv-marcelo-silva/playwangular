import { Component, OnInit, Input } from "@angular/core";

import { Restaurante } from "./restaurant-item.model";

@Component({
  selector: "mt-restaurant-item",
  templateUrl: "./restaurant-item.component.html",
})
export class RestaurantItemComponent implements OnInit {
  @Input() restaurant: Restaurante;

  constructor() {}

  ngOnInit() {}
}
