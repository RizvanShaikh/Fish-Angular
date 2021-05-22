import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Input() searchText : String = '';
  @Output() searchEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getSearch(q){
    this.searchText = q;
    this.searchEvent.emit(q);
  }
}
