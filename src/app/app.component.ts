import { Component, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  offsetY = 0;

  @ViewChild('buttonTop', { static: true }) scrollTopButton: ElementRef;
  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    console.log(window.scrollY, document.documentElement.scrollTop
      , document.body.scrollTop)

    this.offsetY = window.scrollY;
  }

  showScrollTop() {
    return this.offsetY <= 130;
  }


  constructor(private loader: LoaderService, private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loader.isLoading = true;
      }
    })
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
