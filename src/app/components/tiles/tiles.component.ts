import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReentrantProfile } from 'src/app/types/reentrantProfile'

@Component({
  selector: 'tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
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
  ],
})
export class TilesComponent implements OnInit {
  @Input('data') data: ReentrantProfile = undefined;
  flipState = 'front';

  constructor() { }

  ngOnInit() {
  }

  reentrantDetails(data: any) {
  }

  toggle() {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';
  }
}
