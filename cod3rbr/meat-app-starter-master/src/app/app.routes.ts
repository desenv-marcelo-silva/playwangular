import { Routes } from "@angular/router";

import { LoggedInGuard } from "./security/logged-in.guard";

import { HomeComponent } from "./home/home.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";

import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";

import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./security/login/login.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "login/:to", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "about",
    loadChildren: "./about/about.module#AboutModule",
  },
  { path: "restaurant", component: RestaurantComponent },
  {
    path: "restaurant/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
  {
    path: "order",
    loadChildren: "./order/order.module#OrderModule",
    canLoad: [LoggedInGuard],
  },
  { path: "order-summary", component: OrderSummaryComponent },
  { path: "**", component: NotFoundComponent },
];
