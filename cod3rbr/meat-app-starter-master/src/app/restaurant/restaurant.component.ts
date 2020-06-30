import { Component, OnInit } from '@angular/core';

import { RestaurantService } from './restaurant.service';
import { Restaurante } from './restaurant-item/restaurant-item.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  restaurants: Restaurante[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants();
  }

}
