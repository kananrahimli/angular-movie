import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.scss']
})
export class TvShowItemComponent implements OnInit{
    
    constructor(private tvShowService:TvShowService,private router: ActivatedRoute){}
  id!: string | null;

ngOnInit(): void {
  
}
}
