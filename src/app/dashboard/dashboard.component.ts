import {Component, OnInit} from '@angular/core';
import {SearchService} from '../core/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.data = this.searchService.search('').subscribe(
      value => {
        this.data = value;
        console.log(this.data.items);
      }
    );
  }

}
