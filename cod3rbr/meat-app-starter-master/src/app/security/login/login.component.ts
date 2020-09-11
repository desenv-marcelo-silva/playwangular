import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "./login.service";

import { NotificationService } from "../../shared/messages/notification.service";

@Component({
  selector: "mt-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required]),
    });
  }

  login() {
    const { email } = this.loginForm.value;
    const { password } = this.loginForm.value;

    this.loginService.login(email, password).subscribe(
      (user) => this.notification.notify(`Bem vindo ${user.name}`),
      (response) => this.notification.notify(`Erro ${response.error.message}`)
    );
  }
}
