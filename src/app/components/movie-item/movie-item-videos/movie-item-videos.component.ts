import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MovieVideos } from 'src/app/models/movie';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-item-videos',
  templateUrl: './movie-item-videos.component.html',
  styleUrls: ['./movie-item-videos.component.scss']
})
export class MovieItemVideosComponent implements OnInit{
 @Input() movieItemVideo!:MovieVideos
 url:string='https://www.youtube.com/embed/'
 safeUrl!:SafeResourceUrl
constructor(private sanitizer:DomSanitizer){

}
ngOnInit(): void {
  
  this.convertSafeUrl(this.url)
  
}

convertSafeUrl(url:string){
  this.safeUrl=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.movieItemVideo.key)
}
}
