import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-menu-tab",
  templateUrl: "./menu-tab.component.html",
  styleUrls: ["./menu-tab.component.scss"],
})
export class MenuTabComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}
}
