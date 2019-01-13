import {BrowserModule} from '@angular/platform-browser';
import {NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MetricComponent } from './metric/metric.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';
import { BasicCardComponent } from './basic-card/basic-card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    BasicCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule {
}
