import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { debounce } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  readonly isloading$ = this._isLoading.asObservable().pipe(debounce(() => interval(500)));

  set isLoading(val) {
    this._isLoading.next(val);
    setTimeout(() => { this.isLoading(false) }, 800);
  }

  constructor() {
  }
}
