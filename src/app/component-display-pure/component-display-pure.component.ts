import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'component-display-pure',
  templateUrl: './component-display-pure.component.html',
  styleUrls: ['./component-display-pure.component.scss']
})
export class ComponentDisplayPureComponent implements OnInit {
  singleSelect = SELECT;
  multiSelect = SELECT;
  multi = new FormControl();
  singleFilter = '';
  multiFilter = '';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  singleSelectFilter(query: string) {
    this.singleFilter = query;
    this.singleSelect = SELECT.filter(({ key }) => key.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  multiSelectFilter(query: string) {
    this.multiFilter = query;
    this.multiSelect = SELECT.filter(({ key }) => key.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }

  multiSelectToggle(isOpen) {
    if (!isOpen) {
      this.multiSelect = SELECT;
      this.multiFilter = '';
    }
  }

  singleSelectToggle(isOpen) {
    if (!isOpen) {
      this.singleSelect = SELECT;
      this.singleFilter = '';
    }
  }

  selectAll() {
    this.multi.setValue([1, 2, 3, 4, 5]);
  }

  unselectAll() {
    this.multi.reset();
  }


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
const SELECT = [
  { key: '30 Day Follow Up to Intro', val: 1 },
  { key: 'Act of Attendance - In Person Testimony', val: 2 },
  { key: 'Act of Attendance - In Person Testimony & Intro', val: 3 },
  { key: 'Act of Input - Reg Information & Input Options', val: 4 },
  { key: 'Act of Received Input - & Intro Information', val: 5 }
]


@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent { }