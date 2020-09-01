import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Restaurante } from "./restaurant-item.model";

@Component({
  selector: "mt-restaurant-item",
  templateUrl: "./restaurant-item.component.html",
  animations: [
    trigger("restaurantAppeared", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", [
        style({ opacity: 0, transform: "translate(-30px, -10px)" }),
        animate("500ms 0s ease-in-out"),
      ]),
    ]),
  ],
})
export class RestaurantItemComponent implements OnInit {
  restaurantState = "ready";
  @Input() restaurant: Restaurante;

  constructor() {}

  ngOnInit() {}
}
