import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Output("nextPage") nextPage: EventEmitter<any> = new EventEmitter();
  @Output("previousPage") previousPage: EventEmitter<any> = new EventEmitter();

  @Input() hasNext: boolean;
  @Input() currentPage: boolean;

  constructor() { }

}
