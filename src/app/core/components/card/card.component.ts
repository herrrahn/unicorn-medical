import {Component, Input, OnInit} from '@angular/core';
import {IItem} from '../../services/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() searchResultItem: IItem;
  constructor() { }

  ngOnInit(): void {
  }

  openInNewWindow(link: string) {
    window.open(link, '_blank')
  }

  convertEpochToDate(date: number) {
    return date * 1000.0;
  }
}
