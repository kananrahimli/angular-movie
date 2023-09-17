import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackdropModel, Movie, MovieActors, MovieVideos } from 'src/app/models/movie';
import { TvSeries } from 'src/app/models/tv-show';
import { TvShowService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.scss'],
})
export class TvShowItemComponent implements OnInit {
  constructor(
    private tvShowService: TvShowService,
    
    private router: ActivatedRoute
  ) {}
  id!: string | null;
  tvShow!: TvSeries;
  tvShowImages!: BackdropModel[];
  tvShowVideos!: MovieVideos[];
  tvShowActors!: MovieActors[];
  similarTvShow!:TvSeries[]
  responsiveOptions: any[] | undefined;
  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
      this.getMovieById(this.id);
    this.getMovieImages(this.id);
    this.getMovieVideos(this.id);
    this.getMovieActors(this.id);
    this.getSimilarMovies(this.id,12)
  window.scrollTo(0,0)
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
    this.tvShowService.getMovieById(id).subscribe((data) => {
      this.tvShow = data;
    });
  }

  getMovieImages(id: string | null) {
    this.tvShowService.getMovieImages(id).subscribe((data) => {
      this.tvShowImages = data.backdrops;
    });
  }

  getMovieVideos(id: string | null) {
    this.tvShowService.getMovieVideos(id).subscribe((data) => {
      this.tvShowVideos = data.results;
    });
  }

  getMovieActors(id: string | null) {
    this.tvShowService.getMovieActors(id).subscribe((data) => {
      this.tvShowActors = data.cast;
    
    });
  }

  getSimilarMovies(id:string|null,size:number){
    this.tvShowService.getSimilarMovies(id,size).subscribe(data=>{
      this.similarTvShow=data
    })
  }
}
