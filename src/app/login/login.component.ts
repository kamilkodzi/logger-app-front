import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService) {}

  ngOnInit() {}
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    this.Auth.logIn(username, password).subscribe((data) => {
      if (data["body"] == "Hello world") {
        window.alert("SUPER credentials");
      }
      window.alert("invalid credentials");
    });
  }
}
