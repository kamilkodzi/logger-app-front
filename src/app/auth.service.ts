import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

type UserData = {
  user: string;
  message: string;
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private loggedInStatus = false;

  logIn(username, password) {
    return this.http.post<UserData>("api/login", {
      username,
      password,
    });
  }
  setLoggedIn(status: boolean) {
    this.loggedInStatus = status;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
}
