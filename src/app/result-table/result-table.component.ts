import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ReentrantProfile } from 'src/app/types/reentrantProfile';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements AfterViewInit {
  @Input('data')
  set data(val: ReentrantProfile[]) {
    if (!!val && val !== []) {
      this.dataSource.data = val;
      console.log(val)
    }
  };
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['offenderName', 'sid', 'docIdentifier', 'pbppIdentifier','icotsNo' ,'sex', 'race', 'dob']
  dataSource = new MatTableDataSource<ReentrantProfile>([]);

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
