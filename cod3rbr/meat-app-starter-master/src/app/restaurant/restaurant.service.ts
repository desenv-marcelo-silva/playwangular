import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Restaurante } from './restaurant-item/restaurant-item.model';
import { MEAT_API } from './../app.api';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) {}

  restaurants(): Observable<Restaurante[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map(response => response.json());
  }
}
