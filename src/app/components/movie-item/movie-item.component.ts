import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit{
 @Input() currentMovieItem:Movie | null=null

 ngOnInit(): void {
  //  console.log(this.currentMovieItem);
   
 }
}
