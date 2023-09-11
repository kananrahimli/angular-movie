export interface Movie {
 
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres:GenreItem[]
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  spoken_languages:[],
  runtime: 155,
  revenue:number,
  status:string,

}

export interface CommponMovieModel{
    page:number,
    results:Movie[],
    total_pages:number,
    total_results:number
}


export interface GenreItem{
  id:number,
  name:string
}
export interface commonGenreModel{
  genres:GenreItem[]
}

export interface CommonImageModel {
 backdrops:BackdropModel[],
 id:number,
 logos:LogoModel[],
 posters:PosterModel
}

export interface BackdropModel{
  
   file_path:string
  
}

export interface PosterModel{
  
  file_path:string
 
}

export interface LogoModel{
  
  file_path:string
 
}

export interface CommonMovieVideos{
  id:number,
  results:MovieVideos[]
}
export interface MovieVideos{
  name:string,
  type:string,
  key:string,
  published_at:string
}

export interface CommonMovieActors{
  id:number,
  cast:MovieActors[]
}

export interface MovieActors{
  id:number,
  original_name:string,
  profile_path:string,
  character:string
}
