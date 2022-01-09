import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LoaderService } from 'src/app/service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(router: Router, private loader: LoaderService) {
    console.log('router service init')
    router.events.subscribe(ev => {
      console.log('navigation start')
      if (ev instanceof NavigationStart) {
        console.log('navigation start')
        this.loader.isLoading = true;
      }
    })
  }
}
