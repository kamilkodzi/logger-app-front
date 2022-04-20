import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorsData } from "./errorsData";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ErrorsService {
  constructor(private http: HttpClient) {}

  getErrors(): Observable<ErrorsData> {
    return this.http.get<ErrorsData>(
      "https://localhost:4050/errors?page=1&rowslimit=100",
      { headers: new HttpHeaders().set("Authorization", "Basic QUNNRToxMjM0") }
    );
  }
}
