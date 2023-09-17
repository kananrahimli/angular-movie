import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent  implements OnInit{
  @Output() getPageNumber = new EventEmitter<number>();
  @Input() size!:number|null
 
  currentPage!:number
  ngOnInit(): void {
    this.pageNo = 1;
    
  }
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  pageSize!: number;
  pageNo!: number;

  pageEvents(event: any) {
    if(event.pageIndex==0){
      event.pageIndex=1   
    }
    this.currentPage=event.pageIndex

    this.getPageNumber.emit(this.currentPage);

    if(event.pageIndex > this.pageNo) {
      // Clicked on next button
    } else {
      // Clicked on previous button
    }
    // The code that you want to execute on clicking on next and previous buttons will be written here.
 }
}
