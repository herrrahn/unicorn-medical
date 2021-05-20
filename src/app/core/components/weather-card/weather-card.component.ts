import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../../services/weather.service';
import {WeatherConditions} from './weather-conditions';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() weatherData: IWeather;

  constructor() {
  }

  ngOnInit(): void {
  }

  /* just a very simple algorithm to provide a few different types of weather */
  findWeather() {
    if (!this.weatherData) {
      return;
    }
    if (this.weatherData.Regen > 0.1) {
      return WeatherConditions.RAIN;
    }

    if (this.weatherData.Helligkeit > 4000) {
      return WeatherConditions.CLEAR;
    }

    return WeatherConditions.CLOUDY;
  }
}
