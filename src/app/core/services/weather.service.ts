import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface IWeather {
  Datum: string;
  Zeit: string;
  'Temp. A.': number;
  'Temp. 3': number;
  'Feuchte A.': number;
  Luftdruck: number;
  Regen: number;
  Wind: number;
  Richtung: number;
  Helligkeit: number;
}
@Injectable()
export class WeatherService {

  private data: IWeather[] = [];
  constructor(private http: HttpClient) {

  }

  async getWeatherData() {
    this.data = await this.http.get<IWeather[]>('assets/weatherdata.json').toPromise();
  }

  async getARandomWeather() {
    if (this.data.length === 0) {
      await this.getWeatherData();
    }
    const index = this.getRandomArbitrary(this.data.length)
    return this.data[index];
  }

  private getRandomArbitrary(max) {
    return Math.floor(Math.random() * max);
  }
}
