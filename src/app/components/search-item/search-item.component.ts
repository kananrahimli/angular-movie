import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Output() searchQuery=new EventEmitter<string>()
 query:string=''
 findMovies(){
  this.searchQuery.emit(this.query)
 }
}

