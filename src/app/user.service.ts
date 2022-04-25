import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface isLoggedIn {
  status: boolean;
}
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>("api/isloggedin");
  }
}
