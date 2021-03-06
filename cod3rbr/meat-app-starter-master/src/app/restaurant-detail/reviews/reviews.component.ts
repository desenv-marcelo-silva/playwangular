import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";

import { RestaurantService } from "./../../restaurant/restaurant.service";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const { id } = this.route.parent.snapshot.params;
    this.reviews = this.restaurantService.reviewsOfRestaurant(id);
  }
}
