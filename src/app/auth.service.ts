import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loggedInStatus = false;

  getUserDetails(username, password) {
    return this.http.post("api/login", {
      username,
      password,
    });
  }

  get isLoggedIn() {
    return true;
  }
}
