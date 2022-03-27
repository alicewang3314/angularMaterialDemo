import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ReentrantProfile } from 'src/app/types/reentrantProfile';
import { CacheService } from 'src/app/service/cache.service';
import { Router } from '@angular/router';

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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['offenderName', 'sid', 'docIdentifier', 'pbppIdentifier', 'icotsNo', 'sex', 'race', 'dob']
  dataSource = new MatTableDataSource<ReentrantProfile>([]);

  reentrantDetails(val: any) {
    console.log(val);
    this.cache.seletedReentrant = val;
    this.router.navigateByUrl('details');
  }

  constructor(private cache: CacheService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
