import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ReentrantProfile } from 'src/app/types/reentrantProfile'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
@Component({
  selector: 'app-result-grid-view',
  templateUrl: './result-grid-view.component.html',
  styleUrls: ['./result-grid-view.component.scss']
})
export class ResultGridViewComponent implements OnInit {
  // @Input('data') data: ReentrantProfile[] = [];
  private profiles: ReentrantProfile[];
  pageNum = 1;
  profilePerPage = 12;
  currentPage: Array<Array<ReentrantProfile>>;
  length = 0;
  goToPage = undefined;

  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  @Input()
  set data(value: ReentrantProfile[]) {
    if (value && value !== []) {
      this.profiles = value;
      this.getProfilesByPageNum(this.pageNum = 1);
      this.length = Math.ceil(this.profiles.length / 15);
    }
  }

  getProfilesByPageNum(pageNum: number) {
    const startIdx = (pageNum - 1) * this.profilePerPage;
    const endIdx = startIdx + this.profilePerPage;
    const arr = [];

    for (let i = startIdx; i < endIdx; i += 3) {
      arr.push(this.profiles.slice(i, i + 3));
    }

    this.currentPage = arr;
  }

  jumpToPage(goto) {
    if (!!goto && goto !== this.pageNum) {
      this.getProfilesByPageNum(goto);
      this.pageNum = goto;
      this.paginator.pageIndex = goto-1;
      this.goToPage = undefined;
    }
  }

  refreshPage(ev: PageEvent) {
    this.pageNum = ev.pageIndex + 1;
    !!this.profiles.length && this.getProfilesByPageNum(this.pageNum);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
