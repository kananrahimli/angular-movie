import { Component, Input, OnInit } from '@angular/core';
import { TvSeries } from 'src/app/models/tv-show';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss']
})
export class TvShowListComponent implements OnInit {
  @Input() currentTvShows: TvSeries[]  = [];
  mybreakpoint: number = 5;
  ngOnInit(): void {
    this.mybreakpoint = window.innerWidth <= 768 ? 1 : 6;
  }
  handleSize($event:any) {
    this.mybreakpoint = $event.target.innerWidth <= 768 ? 1 : 6;
  }
}
