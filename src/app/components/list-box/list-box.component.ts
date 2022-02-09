import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.scss']
})
export class ListBoxComponent implements OnInit {
  list = [
    'AF3025 - TWIGG III, HAROLD O',
    '200-79-46-1 - ABDULLAH, NAREE'
  ]
  constructor() { }

  ngOnInit() {
  }

  remove(idx: number) {
    this.list.splice(idx, 1);
  }
}
