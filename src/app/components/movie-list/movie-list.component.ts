import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() currentMovies: Movie[]  = [];
  mybreakpoint: number = 5;
  ngOnInit(): void {
    this.mybreakpoint = window.innerWidth <= 768 ? 1 : 6;
  }
  handleSize($event:any) {
    this.mybreakpoint = $event.target.innerWidth <= 768 ? 1 : 6;
  }
}
