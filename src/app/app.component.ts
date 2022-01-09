import { Component } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCaptorDemo';
  isLoading$ = this.loader.isloading$;

  constructor(private loader: LoaderService) {

  }
}
