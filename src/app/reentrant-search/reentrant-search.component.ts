import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reentrant-search',
  templateUrl: './reentrant-search.component.html',
  styleUrls: ['./reentrant-search.component.scss']
})
export class ReentrantSearchComponent implements OnInit, AfterContentInit {
  races = races;
  reentrantSearch: FormGroup = new FormGroup({
    identifier: new FormControl(''),
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    dob: new FormControl(null),
    race: new FormControl(''),
    sex: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

  filterDropdown(query: string) {
    this.races = races.filter(race => race.toLowerCase().indexOf(query) !== -1)
  }

  resetDropdown() {
    this.races = races;
  }

  onSubmit() {
    console.log(this.reentrantSearch.value)
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

