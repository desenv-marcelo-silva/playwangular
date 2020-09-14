import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurant/restaurant.service";
import { OrderService } from "app/order/order.service";
import { NotificationService } from "./messages/notification.service";
import { LoginService } from "../security/login/login.service";

import { LoggedInGuard } from "app/security/logged-in.guard";
import { LeaveOrderGuard } from "app/order/leave-order.guard";

import { AuthInterceptor } from "app/security/auth.interceptor";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        OrderService,
        RestaurantService,
        ShoppingCartService,
        NotificationService,
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
    };
  }
}
