export interface TvSeries {
 
    backdrop_path: string,
      first_air_date: string,
      genre_ids:number[]
      id: Number,
      original_name: string,
      overview: string,
      popularity: number,
      poster_path: string,
      vote_average: number,
      vote_count: number
  }

  export interface CommonTvSeries{
    id:number,
    results:TvSeries[],
    total_pages:number,
    total_results:number
  }