import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

import { TvShowItemComponent } from './pages/tv-shows/tv-show-item/tv-show-item.component';
import { HeaderComponent } from './layout/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselComponent } from './components/carousel/carousel.component'
import {MatPaginatorModule} from '@angular/material/paginator';
import { CarouselModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {MatCardModule} from '@angular/material/card';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailComponent } from './pages/movies/movie-detail/movie-detail.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { MovieItemVideosComponent } from './components/movie-item/movie-item-videos/movie-item-videos.component';
import { CarouselModule as PrimeCarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import {  TvShowItemComponent as TvshowItem} from './components/tv-show-item/tv-show-item.component';
import { GenreItemComponent } from './pages/genres/genre-item/genre-item.component';
import { GenreMovieComponent } from './pages/genre-movie/genre-movie.component';

// import {MatCardHeader} from '@angular/material/card';
// import {MatCardContent} from '@angular/material/card';
// import {MatCardActions} from '@angular/material/card';
// import {MatCardFooter} from '@angular/material/card';
// import {MatCardImage} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieItemComponent,
    TvShowsComponent,
    GenresComponent,
    SearchItemComponent,
   
    TvShowItemComponent,
    HeaderComponent,
    PaginationComponent,
    CarouselComponent,
    MovieListComponent,
    MoviesComponent,
    MovieDetailComponent,
    BannerComponent,
    MovieItemVideosComponent,
    TvShowListComponent,
    TvshowItem,
    GenreItemComponent,
    GenreMovieComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CarouselModule,
    IconModule,
    MatGridListModule,
    MatPaginatorModule,
    FormsModule,
    MatTabsModule,
    MatListModule,
   GalleriaModule,
   ImageModule,
   PrimeCarouselModule,
ButtonModule   
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
