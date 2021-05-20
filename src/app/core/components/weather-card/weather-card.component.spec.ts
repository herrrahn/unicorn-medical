import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherCardComponent} from './weather-card.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correctly the input data ', () => {
    const weatherData = {
      'Datum': '02.01.2016',
      'Zeit': '19:15',
      'Temp. A.': -0.2,
      'Temp. 3': 39.7,
      'Feuchte A.': 92,
      'Luftdruck': 965,
      'Regen': 0,
      'Wind': 0,
      'Richtung': 120,
      'Helligkeit': 0
    };

    component.weatherData = weatherData;
    fixture.detectChanges();
    expect(de.query(By.css('#cardTitle')).nativeElement.innerText).toBe('München - Bedeckt');
    expect(de.query(By.css('#cardSubTitle')).nativeElement.innerText).toBe('02.01.2016 - 19:15');
    expect(de.query(By.css('#cardContent')).nativeElement.innerText).toBe('-0.2°C | 39.7°F');
    expect(de.query(By.css('#cardContainer')).nativeElement.innerText).toBe('0km/h');
  });

  it('should get correct forecast CLOUDY', () => {
    const weatherData = {
      'Datum': '02.01.2016',
      'Zeit': '19:15',
      'Temp. A.': -0.2,
      'Temp. 3': 39.7,
      'Feuchte A.': 92,
      'Luftdruck': 965,
      'Regen': 0,
      'Wind': 0,
      'Richtung': 120,
      'Helligkeit': 0
    };
    component.weatherData = weatherData;
    expect(component.findWeather()).toBe('Bedeckt');
  });

  it('should get correct forecast CLEAR', () => {
    const weatherData = {
      'Datum': '02.01.2016',
      'Zeit': '19:15',
      'Temp. A.': -0.2,
      'Temp. 3': 39.7,
      'Feuchte A.': 92,
      'Luftdruck': 965,
      'Regen': 0,
      'Wind': 0,
      'Richtung': 120,
      'Helligkeit': 10000
    };
    component.weatherData = weatherData;
    expect(component.findWeather()).toBe('Sonnig');
  });

  it('should get correct forecast RAIN', () => {
    const weatherData = {
      'Datum': '02.01.2016',
      'Zeit': '19:15',
      'Temp. A.': -0.2,
      'Temp. 3': 39.7,
      'Feuchte A.': 92,
      'Luftdruck': 965,
      'Regen': 0.2,
      'Wind': 0,
      'Richtung': 120,
      'Helligkeit': 10000
    };
    component.weatherData = weatherData;
    expect(component.findWeather()).toBe('Regen');
  });
});
