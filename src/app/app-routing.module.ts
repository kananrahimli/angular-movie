import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { TvShowItemComponent } from './pages/tv-shows/tv-show-item/tv-show-item.component';
import { MovieDetailComponent } from './pages/movies/movie-detail/movie-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tv-shows',component:TvShowsComponent},
  {path:'genres',component:GenresComponent},
  {path:'movie/:id',component:MovieDetailComponent},
  {path:'tv-show/:id',component:TvShowItemComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
