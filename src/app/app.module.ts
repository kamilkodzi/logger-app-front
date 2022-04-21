import { ButtonModule } from "primeng/button";
import { ErrorsTableComponent } from "./errors-table/errors-table.component";
import { MenuTabComponent } from "./menu-tab/menu-tab.component";
import { TabMenuModule } from "primeng/tabmenu";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routung.module";
import { HomeViewComponent } from "./home-view/home-view.component";
import { LogsTableComponent } from "./logs-table/logs-table.component";
import { SettingViewComponent } from "./setting-view/setting-view.component";
import { ErrorsService } from "./errors-table/errorDataService";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableModule } from "primeng/table";
import { CalendarModule } from "primeng/calendar";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { ProgressBarModule } from "primeng/progressbar";
import { InputTextModule } from "primeng/inputtext";
import { DataTableModule } from "primeng/primeng";
import { NewDatePipePipe } from "./new-date-pipe.pipe";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    ErrorsTableComponent,
    MenuTabComponent,
    HomeViewComponent,
    LogsTableComponent,
    SettingViewComponent,
    NewDatePipePipe,
    LoginComponent,
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
  ],
  providers: [ErrorsService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
