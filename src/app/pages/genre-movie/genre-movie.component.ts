import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommponMovieModel, Movie } from 'src/app/models/movie';
import { CommonTvSeries } from 'src/app/models/tv-show';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.component.html',
  styleUrls: ['./genre-movie.component.scss'],
})
export class GenreMovieComponent implements OnInit {
  id!: string | null;
  genreMovieList!: Movie[];
  page: number = 1;
  commonGenres!:CommponMovieModel
  type!:string
  constructor(
    private GenreService: GenresService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
   this.router.snapshot.routeConfig?.path?.includes('movies')?this.type='movie':this.type='tv'
    this.router.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
      this.getMoviOrTvShows(1, this.id, this.type);
    });
  }

  getMoviOrTvShows(page: number, id: string | null, type: string) {
    this.GenreService.getMovievGenres(page, id, type).subscribe((data) => {
      this.commonGenres=data
      this.genreMovieList = data.results;
    });
  }

  getMoviesPageNumber(event: number) {
    this.page = event;
    this.GenreService.getMovievGenres(this.page,this.id,this.type).subscribe(data=>{
     this.genreMovieList=data.results
      
    })
  }
}
