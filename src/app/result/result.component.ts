import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  data: any[] = [];
  view: 'table' | 'tile' = 'tile';
  showfilters = false;
  
  constructor(private http: HttpClient) {
    http.get('./assets/mock.json').subscribe((res: any[]) => {
      this.data = res;
    });
  }

  ngOnInit() {
  }

  isActive(name: string) {
    return this.view === name;
  }
}