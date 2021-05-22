import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPagination } from '../../interfaces/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pagination : IPagination = null;
  @Output() changePage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getPage(page){
    this.changePage.emit(page)
  }
}
