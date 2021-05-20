import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correctly the input data ', () => {
    const item = {
      'tags': [
        'javascript'
      ],
      'owner': {
        'reputation': 569,
        'user_id': 10908002,
        'user_type': 'registered',
        'profile_image': 'https://www.gravatar.com/avatar/f2bef13074be8812eb08c79d4fb79b5e?s=128&d=identicon&r=PG&f=1',
        'display_name': 'Sackadelic',
        'link': 'https://stackoverflow.com/users/10908002/sackadelic'
      },
      'is_answered': false,
      'view_count': 5,
      'answer_count': 0,
      'score': 0,
      'last_activity_date': 1621266086,
      'creation_date': 1621266086,
      'question_id': 67572890,
      'content_license': 'CC BY-SA 4.0',
      'link': 'https://stackoverflow.com/questions/67572890/make-a-checkbox-radio-label-bold-on-check-with-javascript',
      'title': 'Make a checkbox / radio label bold on check with JavaScript'
    };


    component.searchResultItem = item;
    fixture.detectChanges();
    expect(de.query(By.css('#cardTitle')).nativeElement.innerText).toContain('Sackadelic');
    expect(de.query(By.css('#cardSubTitle')).nativeElement.innerText).toHaveSize(14);
    expect(de.query(By.css('#cardContent')).nativeElement.innerText).toBe('Make a checkbox / radio label bold on check with JavaScript');
  });

  it('should convert correctly epoch to datetime', () => {
    const dateTimeStart = new Date(component.convertEpochToDate(0));
    expect(dateTimeStart.getDate()).toBe(1);
    expect(dateTimeStart.getMonth()).toBe(0);
    expect(dateTimeStart.getFullYear()).toBe(1970);
  })
});
