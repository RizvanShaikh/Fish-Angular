import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.css']
})
export class DatepickerInputComponent implements OnInit {

  @Input() datepickerModel;
  myDateValue: Date;

  constructor() { }

  ngOnInit() {
    this.myDateValue = new Date();

  }

  // onDateChange(newDate: Date) {
  //   console.log(newDate);
  // }

  onDateChange(event) {
    console.log(event);
  }

}
