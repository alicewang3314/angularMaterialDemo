import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reentrant-search',
  templateUrl: './reentrant-search.component.html',
  styleUrls: ['./reentrant-search.component.scss']
})
export class ReentrantSearchComponent implements OnInit {
  // form check if there is at least a input value
  // reset all value
  races = races;

  constructor() { }

  ngOnInit() {
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

