import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

import { User } from "./user.model";
import { MEAT_API } from "../../app.api";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  user: User;

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .post<User>(`${MEAT_API}/login`, { email, password }, httpOptions)
      .do((user) => (this.user = user));
  }
}
