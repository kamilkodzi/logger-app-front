import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorsTableComponent } from "./errors-table/errors-table.component";
import { HomeViewComponent } from "./home-view/home-view.component";
import { LoginComponent } from "./login/login.component";
import { LogsTableComponent } from "./logs-table/logs-table.component";
import { SettingViewComponent } from "./setting-view/setting-view.component";

const routes: Routes = [
  { path: "error-table", component: ErrorsTableComponent },
  { path: "home", component: HomeViewComponent },
  { path: "logs-table", component: LogsTableComponent },
  { path: "settings", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
