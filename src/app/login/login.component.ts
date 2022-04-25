import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit() {
    // if (this.Auth.isLoggedIn) this.router.navigate(["home"]);
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    this.Auth.logIn(username, password).subscribe((data) => {
      if (data.status) {
        this.router.navigate(["home"]);
      }
    });
  }
}
