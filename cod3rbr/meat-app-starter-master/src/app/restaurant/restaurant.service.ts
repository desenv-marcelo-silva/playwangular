import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { MEAT_API } from "./../app.api";
import { ErrorHandler } from "./../app.error-handler";

import { Restaurante } from "./restaurant-item/restaurant-item.model";

@Injectable()
export class RestaurantService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurante[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurante> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }
}
