import { Component, Input } from '@angular/core';
import { TvSeries } from 'src/app/models/tv-show';

@Component({
  selector: 'app-tvshow-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.scss']
})
export class TvShowItemComponent {
  @Input() currentTvShow:TvSeries | null=null
}
