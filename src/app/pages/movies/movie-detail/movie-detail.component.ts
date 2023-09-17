import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {
  BackdropModel,
  CommonImageModel,
  Movie,
  MovieActors,
  MovieVideos,
} from 'src/app/models/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  id!: string | null;
  movieItem!: Movie;
  movieItemImages!: BackdropModel[];
  movieItemVideos!: MovieVideos[];
  movieItemActors!: MovieActors[];
  similarMovies!: Movie[];
  responsiveOptions: any[] | undefined;

  constructor(
    private movieService: MovieServiceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
      this.getMovieById(this.id);
      this.getMovieImages(this.id);
      this.getMovieVideos(this.id);
      this.getMovieActors(this.id);
      this.getSimilarMovies(this.id, 12);
      window.scrollTo(0, 0);
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getMovieById(id: string | null) {
    this.movieService.getMovieById(id).subscribe((data) => {
      this.movieItem = data;
    });
  }

  getMovieImages(id: string | null) {
    this.movieService.getMovieImages(id).subscribe((data) => {
      this.movieItemImages = data.backdrops;
    });
  }

  getMovieVideos(id: string | null) {
    this.movieService.getMovieVideos(id).subscribe((data) => {
      this.movieItemVideos = data.results;
    });
  }

  getMovieActors(id: string | null) {
    this.movieService.getMovieActors(id).subscribe((data) => {
      this.movieItemActors = data.cast;
    });
  }

  getSimilarMovies(id: string | null, size: number) {
    this.movieService.getSimilarMovies(id, size).subscribe((data) => {
      this.similarMovies = data;
    });
  }
}
