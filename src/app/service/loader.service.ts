import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  readonly isloading$ = this._isLoading.asObservable();
  private overlayRef = this.createOverlayRef();

  set isLoading(val) {
    this._isLoading.next(val);
    setTimeout(() => { this._isLoading.next(false) }, 800);
  }

  private createOverlayRef() {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  constructor(private overlay: Overlay) {
    this.isloading$
      .subscribe(isLoading => {
        console.log('isloading', isLoading)
        isLoading
          ? !this.overlayRef.hasAttached() && this.overlayRef.attach(new ComponentPortal(MatSpinner))
          : this.overlayRef.hasAttached() && this.overlayRef.detach();
      });
  }
}
