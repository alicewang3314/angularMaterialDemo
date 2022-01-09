import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private _seletedReentrant: any;

  set seletedReentrant(val: any) {
    this._seletedReentrant = val;
  }

  get seletedReentrant() {
    return this._seletedReentrant;
  }

  constructor() { }
}
