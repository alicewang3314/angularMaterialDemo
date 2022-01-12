import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private _seletedReentrant: any;

  set seletedReentrant(val: any) {
    this._seletedReentrant = val;
    localStorage.setItem('selected', JSON.stringify(val));
  }

  get seletedReentrant() {
    if (this._seletedReentrant) {
      return this._seletedReentrant;
    }

    const fromCache = localStorage.getItem('selected');
    if (fromCache) {
      return JSON.parse(fromCache)
    }
    return null;
  }

  constructor() { }
}
