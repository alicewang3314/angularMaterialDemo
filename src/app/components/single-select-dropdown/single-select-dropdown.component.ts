import { Component, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'single-select-dropdown',
  templateUrl: './single-select-dropdown.component.html',
  styleUrls: ['./single-select-dropdown.component.scss']
})
export class SingleSelectDropdownComponent implements OnInit {
  races = races;
  @ViewChild(TemplateRef, { static: true }) templateRef: TemplateRef<any>;
  @Output() dropdownClosed: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filterDropdown(query: string) {
    this.races = races.filter(race => race.toLowerCase().indexOf(query) !== -1)
  }

  resetDropdown() {
    this.races = races;
  }
}

const races = [
  'Asian',
  'American Indian',
  'Black',
  'Hispanic',
  'Unknown',
  'White'
];