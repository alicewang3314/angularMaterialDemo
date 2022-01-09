import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReentrantProfile } from 'src/app/types/reentrantProfile'
import { CacheService } from 'src/app/service/cache.service';
import { Router } from '@angular/router';

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
  @Input('data') data: ReentrantProfile = undefined;
  flipState = 'front';

  constructor(private cache: CacheService, private router: Router) { }

  ngOnInit() {
  }

  reentrantDetails(data: any) {
    this.cache.seletedReentrant = data;
    this.router.navigateByUrl('/details');
  }

  toggle() {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';
  }
}
