import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SearchService} from './core/services/search.service';
import {AppRoutingModule} from './app.routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutModule} from './core/layout/layout.module';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardComponent} from './core/components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {WeatherCardComponent} from './core/components/weather-card/weather-card.component';
import {WeatherService} from './core/services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    CardComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [SearchService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
