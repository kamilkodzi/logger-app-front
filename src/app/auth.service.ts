import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { UserService } from "./user.service";
import { map } from "rxjs/operators";

interface UserData {
  user: string;
  status: any;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private user: UserService) {}
  debugger;
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
