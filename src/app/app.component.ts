import { Component } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCaptorDemo';
  isLoading$ = this.loader.isloading$;

  constructor(private loader: LoaderService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('==> router event', event);
        this.loader.isLoading = true;
      }
    })
  }
}
