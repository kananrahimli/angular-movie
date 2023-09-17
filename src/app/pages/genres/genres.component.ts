import { Component, OnInit } from '@angular/core';
import { GenreItem } from 'src/app/models/movie';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit{
  constructor(private genreService:GenresService){}
  movieGenres!:GenreItem[]
  tvGenres!:GenreItem[]
ngOnInit(): void {
  this.getGneres('movie')
  this.getGneres('tv')
}
getGneres(type:string){
  this.genreService.getGenres(type).subscribe(data=>{
    if(type=='movie'){
      this.movieGenres=data.genres
      return
    }
   this.tvGenres=data.genres

   
  })
}
}
