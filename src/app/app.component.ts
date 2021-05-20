import {Component} from '@angular/core';
import {SearchService} from './core/services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  activePage = '';

  constructor(private _searchService: SearchService,
              private router: Router) {
    router.events.subscribe(() => {
      const active = location.pathname.split('/')[1];
      this.activePage = active;
    });
  }

}
