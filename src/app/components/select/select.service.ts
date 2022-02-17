import { Injectable } from '@angular/core';
import { SelectComponent } from './select.component';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private select: SelectComponent;

  register(select: SelectComponent) {
    this.select = select;
  }

  getSelect() {
    return this.select;
  }

  constructor() { }
}
