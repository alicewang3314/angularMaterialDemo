import { Injectable } from '@angular/core';
import { SelectComponent } from './select.component';

@Injectable()
export class SelectService {
  private select: SelectComponent;
  private _isMultiSelect = false;

  register(select: SelectComponent) {
    this.select = select;
  }

  getSelect(): SelectComponent {
    return this.select;
  }

  constructor() { }
}
