import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { MEAT_API } from "./../app.api";

import { Restaurante } from "./restaurant-item/restaurant-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}

  restaurants(searchTerm?: string): Observable<Restaurante[]> {
    let params: HttpParams = undefined;
    if (searchTerm) {
      params = new HttpParams().append("q", searchTerm);
    }
    return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`, {
      params,
    });
  }

  restaurantById(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${MEAT_API}/restaurants/${id}`);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}
