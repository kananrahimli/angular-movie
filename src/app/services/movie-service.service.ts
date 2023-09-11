import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, switchMap } from 'rxjs';
import { CommonImageModel, CommonMovieActors, CommonMovieVideos, CommponMovieModel, Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private http: HttpClient) {}
  baseUrl='https://api.themoviedb.org/3/movie'
  searchUrl='https://api.themoviedb.org/3/search/movie'
  api_key='6cbe23ec31b891b902df912692b79fae'
  loading:boolean=true
  //  options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2JlMjNlYzMxYjg5MWI5MDJkZjkxMjY5MmI3OWZhZSIsInN1YiI6IjYwOTE0NWJlNjhiMWVhMDA1ODc5NDVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGe6yPGXKJOTPeE4epLP2_9jk07_B4HODy2wDkHXLaM'
  //   }
  // };

  

  getMovies(requsetType:string='now_playing',page:number=1,size:number=10) {
    return this.http
      .get<CommponMovieModel>(
       `${this.baseUrl}/${requsetType}?api_key=${this.api_key}&page=${page}`
      ).pipe(switchMap(res=>{
        return of(res.results.slice(0,size))
      }))
  }

  searchMovie(query:string,page:number){
    return this.http.get<CommponMovieModel>(`${this.searchUrl}?api_key=${this.api_key}&query=${query}&page=${page}`)
  }


  getMovieById(id?:string|null){
    return this.http.get<Movie>(`${this.baseUrl}/${id}?api_key=${this.api_key}`)
  }

  getMovieImages(id:string | null){
    return this.http.get<CommonImageModel>(`${this.baseUrl}/${id}/images?api_key=${this.api_key}`)
  }

  getMovieVideos(id:string|null){
    return this.http.get<CommonMovieVideos>(`${this.baseUrl}/${id}/videos?api_key=${this.api_key}`)
  }

  getMovieActors(id:string|null){
    return this.http.get<CommonMovieActors>(`${this.baseUrl}/${id}/credits?api_key=${this.api_key}`)
   
  }

  getSimilarMovies(id:string|null, size:number){
    return this.http.get<CommponMovieModel>(`${this.baseUrl}/${id}/similar?api_key=${this.api_key}`).pipe(switchMap(data=>{
      return of(data.results.slice(0,size))
    }))
    
  }
}


