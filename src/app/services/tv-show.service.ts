import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonTvSeries } from '../models/tv-show';
import { of, switchMap } from 'rxjs';
import { CommonImageModel, CommonMovieActors, CommonMovieVideos, CommponMovieModel, Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private http:HttpClient) { }

  baseUrl:string='https://api.themoviedb.org/3/tv'
  searchUrl:string='https://api.themoviedb.org/3/search'
  api_key='6cbe23ec31b891b902df912692b79fae'

  getTvShows(type:string,page:number,size:number=20){
    return this.http.get<CommonTvSeries>(`${this.baseUrl}/${type}?api_key=${this.api_key}&page=${page}`).pipe(switchMap(data=>{
      return of(data.results.slice(0,size))
    }))
  }

  searchTvShows(query:string,page:number=1){
    return this.http.get<CommonTvSeries>(`${this.searchUrl}/tv?api_key=${this.api_key}&query=${query}&page=${page}`)
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
