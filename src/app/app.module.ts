import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AccordionModule } from "primeng/accordion";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { ErrorsTableComponent } from "./errors-table/errors-table.component";
import { MenuTabComponent } from "./menu-tab/menu-tab.component";
import { TabMenuModule } from "primeng/tabmenu";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routung.module";
import { HomeViewComponent } from './home-view/home-view.component';
import { LogsTableComponent } from './logs-table/logs-table.component';
import { SettingViewComponent } from './setting-view/setting-view.component';

@NgModule({
  declarations: [AppComponent, ErrorsTableComponent, MenuTabComponent, HomeViewComponent, LogsTableComponent, SettingViewComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
