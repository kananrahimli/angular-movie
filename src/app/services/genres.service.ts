import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commongenres } from '../models/genres';
import { CommponMovieModel } from '../models/movie';
import { CommonTvSeries } from '../models/tv-show';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private http: HttpClient) {}
  api_key = '6cbe23ec31b891b902df912692b79fae';
  baseUrl: string = 'https://api.themoviedb.org/3/';
  

  getGenres(type: string,page?:number) {
    return this.http.get<Commongenres>(
      `${this.baseUrl}genre/${type}/list?api_key=${this.api_key}`
    );
  }

  getMovievGenres(page: number, id: string|null, type: string) {
   
     return this.http.get<CommponMovieModel>(
        `${this.baseUrl}/discover/${type}?api_key=${this.api_key}&with_genres=${id}&page=${page}`
      );
    // return this.http.get<CommonTvSeries>(
    //   `${this.baseUrl}/discover/${type}?api_key=${this.api_key}&with_genres=${id}&page=${page}`
    // );
  }
}
