import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('front', style({
        transform: 'rotateY(179deg)'
      })),
      state('back', style({
        transform: 'rotateY(0)'
      })),
      transition('front => back', animate('500ms ease-out')),
      transition('back => front', animate('500ms ease-in'))
    ])
  ]
})
export class FlipCardComponent implements OnInit {
  @Input() data: {
    name: string,
    sid: string,
    doc: string,
    pbpp: string,
    icots: string,
    sex: string,
    race: string,
    dob: string
  } = {
    name: 'John Doe',
    sid: '414-18-21-1',
    doc: 'NB44448',
    pbpp: '176IG',
    icots: '893217',
    sex: 'Male',
    race: 'Asian',
    dob: '12/13/1976'
  };
  flipState = 'front';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.flipState = this.flipState === 'front'? 'back': 'front';
  }
}
