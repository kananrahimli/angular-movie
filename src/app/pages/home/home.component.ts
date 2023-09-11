import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private movieServie: MovieServiceService) {}
  topRatedMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  upComingMovies: Movie[] = [];
  loading: boolean = true;
  ngOnInit(): void {
    this.loading = true;

    this.movieServie.getMovies('upcoming', 1, 10).subscribe((res) => {
      this.topRatedMovies = res;
      this.loading = false;
    });
    this.movieServie.getMovies('now_playing', 1, 10).subscribe((res) => {
      this.popularMovies = res;
      this.loading = false;
    });
    this.movieServie.getMovies('top_rated', 1, 10).subscribe((res) => {
      this.upComingMovies = res;
      this.loading = false;
    });
  }
}
