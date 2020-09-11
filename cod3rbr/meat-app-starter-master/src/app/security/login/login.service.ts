import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";

import { User } from "./user.model";
import { MEAT_API } from "../../app.api";

@Injectable()
export class LoginService {
  user: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.router.events
      .filter((e) => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => (this.lastUrl = e.url));
  }

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

  handleLogout(): void {
    this.user = undefined;
  }

  handleLogin(path: string = this.lastUrl): void {
    this.router.navigate(["/login", btoa(path)]);
  }
}
