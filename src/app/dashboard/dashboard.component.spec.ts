import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {CardComponent} from '../core/components/card/card.component';
import {SearchService} from '../core/services/search.service';
import {WeatherService} from '../core/services/weather.service';
import {DebugElement} from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let searchServiceMock: any;
  let weatherServiceMock: any;

  let de: DebugElement;

  beforeEach(async () => {
    searchServiceMock = {};
    weatherServiceMock = {};

    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [
        {provide: SearchService, useValue: searchServiceMock},
        {provide: WeatherService, useValue: weatherServiceMock}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should identify if is data from weather API', () => {
    expect(component.fromStackOverflow({'Datum': '01.08.1984'})).toBeFalse();
  });

});
