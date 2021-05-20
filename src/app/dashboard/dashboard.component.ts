import {Component, OnDestroy, OnInit} from '@angular/core';
import {IItem, SearchService} from '../core/services/search.service';
import {Subscription} from 'rxjs/Rx';
import {WeatherService} from '../core/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  typeScript: IItem[];
  angular2: IItem[];
  weatherInfo: any[] = [];
  private typeScript$: Subscription;
  private weatherData$: Subscription;
  private angular2$: Subscription;

  constructor(private searchService: SearchService,
              private weatherService: WeatherService) {
  }

  async ngOnInit() {
    this.loadAndSortDataForTypeScript();
    this.loadDataAndSortForAngular();
    this.loadDataAndSortForWeather();
  }

  private loadDataAndSortForWeather() {
    this.weatherData$ = this.searchService.search('weather', 5).subscribe(
      async value => {
        let fromStackoverflow = value;
        fromStackoverflow = fromStackoverflow.sort((a, b) => b.creation_date - a.creation_date);
        for (let i = 0; i < fromStackoverflow.length; i++) {
          /* fill weatherInfo with alternate data provided from Stack overflow and Weather API*/
          this.weatherInfo.push(fromStackoverflow[i]);
          this.weatherInfo.push(await this.weatherService.getARandomWeather());
        }
      }
    );
  }

  private loadDataAndSortForAngular() {
    this.angular2$ = this.searchService.search('angular2', 10).subscribe(
      value => {
        this.angular2 = value;
        this.angular2.sort((a, b) => b.creation_date - a.creation_date);
      }
    );
  }

  private loadAndSortDataForTypeScript() {
    this.typeScript$ = this.searchService.search('typeScript', 10).subscribe(
      value => {
        this.typeScript = value;
        this.typeScript.sort((a, b) => b.creation_date - a.creation_date);
      }
    );
  }

  ngOnDestroy(): void {
    /* Prevent memory leak*/
    if (this.typeScript$) {
      this.typeScript$.unsubscribe();
    }
    if (this.weatherData$) {
      this.weatherData$.unsubscribe();
    }
    if (this.angular2$) {
      this.angular2$.unsubscribe();
    }
  }

  fromStackOverflow(data: any) {
    /* field Datum is only available in the data provided from the Weather API */
    return !data['Datum'];
  }
}
