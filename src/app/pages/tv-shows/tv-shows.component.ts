import { Component, OnInit } from '@angular/core';
import { TvSeries } from 'src/app/models/tv-show';
import { TvShowService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  tvShows!: TvSeries[];
  search: string = '';
  page: number = 1;
  constructor(private tvShowService: TvShowService) {}

  ngOnInit(): void {
    this.getTvShows('airing_today', 1);
  }

  getTvShows(type: string, page: number, size?: number) {
    this.tvShowService.getTvShows(type, page, size).subscribe((data) => {
      this.tvShows = data;
      console.log(this.tvShows);
    });
  }
  getTvShowBySearchQuery(value: string) {
    this.search = value;
    if (value == '') {
      this.tvShowService
        .getTvShows('airing_today', this.page)
        .subscribe((data) => {
          this.tvShows = data;
        });
      return;
    }
    this.tvShowService.searchTvShows(value, this.page).subscribe((data) => {
      this.tvShows = data.results;
    });
  }

  getTvShowPageNumber(event: number) {
    this.page = event;
    if (this.search !== '') {
      this.getTvShowBySearchQuery(this.search);
      return;
    }
    this.getTvShows('airing_today', this.page);
  }
}
