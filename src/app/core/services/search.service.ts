import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface IOwner {
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface IItem {
  tags: string[];
  owner: IOwner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
  last_edit_date?: number;
}

export interface ISearchResultItem {
  items: IItem[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

@Injectable()
export class SearchService {

  private static readonly apiUrl =
    'https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=activity&site=stackoverflow&intitle=';

  constructor(private http: HttpClient) {

  }

  search(keyword: string, pageSize: number): Observable<IItem[]> {
    // return this.http.get<ISearchResultItem>('assets/javascript.json').pipe(
    //   map( value => {return value.items})
    // );
    return this.http.get<ISearchResultItem>(`https://api.stackexchange.com/2.2/search?pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow&intitle=${keyword}`).pipe(
      map( value => {return value.items})
    );
  }


}
