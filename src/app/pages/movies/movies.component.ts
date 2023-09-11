import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  constructor(private movieService:MovieServiceService){

  }
  searchValue:string=''
  loading:boolean=false
  showPag:boolean=true
  ngOnInit(): void {
    this.getMoviesPageNumber(1)
    
    
  }
  movieLists:Movie[]=[]
  page!:number

  getMoviesPageNumber(event:number){
   
    this.page=event
   if(this.searchValue!==''){
    this.movieService.searchMovie(this.searchValue,this.page).subscribe(res=>{
      if(!query){
      
        return
      }
      this.movieLists=res.results
      this.loading=false
    })
   }else{
    this.movieService.getMovies('upcoming',this.page,20).subscribe(data=>{
      this.movieLists=data
    })
   }
    
    
  }

  getMovieBySearchQuery(query:string){
    this.searchValue=query
    this.loading=true
    this.showPag=false
    this.movieService.searchMovie(query,this.page).subscribe(res=>{
      if(!query){
      this.movieService.getMovies('upcoming',this.page,20).subscribe(data=>{
        this.movieLists=data
      })
        return
      }
      this.movieLists=res.results
      this.loading=false
    })
    
  }



}
