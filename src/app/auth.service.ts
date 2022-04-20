import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUserDetails(username, password) {
    return this.http.post("http://localhost:4050/login", {
      username,
      password,
    });
  }
}
