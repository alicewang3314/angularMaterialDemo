import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

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
  @Input('showHideBtn') hideBtn: boolean = false;
  @Output('onHide') onHide: EventEmitter<boolean> = new EventEmitter();

  constructor(private _router: Router) { }

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
    this._router.navigateByUrl('/results');
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

