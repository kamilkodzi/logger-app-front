import { Component, OnInit } from "@angular/core";
import { ErrorsService } from "./errorDataService";
import { ErrorsData } from "./errorsData";

@Component({
  selector: "app-errors-table",
  templateUrl: "./errors-table.component.html",
  styleUrls: ["./errors-table.component.scss"],
})
export class ErrorsTableComponent implements OnInit {
  errorsData: ErrorsData = { meta: {}, data: [] };
  constructor(private errorService: ErrorsService) {}
  displayBasic: boolean;
  message: string;
  ngOnInit() {
    this.getErrors();
  }
  showBasicDialog(message) {
    this.message = message;
    this.displayBasic = true;
  }
  getErrors(): void {
    this.errorService
      .getErrors()
      .subscribe((errors) => (this.errorsData = errors));
  }
}
