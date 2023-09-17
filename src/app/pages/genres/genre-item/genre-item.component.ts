import { Component, Input } from '@angular/core';
import { GenreItem } from 'src/app/models/movie';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.scss']
})
export class GenreItemComponent {
@Input() genreItem!:GenreItem
@Input() genreType!:string

}
