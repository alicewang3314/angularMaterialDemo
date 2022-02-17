import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { SelectComponent } from '../select.component';
import { SelectService } from '../select.service';

@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent {
  @Input() key: string;

  @Input() value: string;

  //?
  @HostBinding('class.selected')
  get selected(): boolean {
    return this.select.selectedOption === this;
  }

  @HostBinding('class.active') active = false;

  @HostListener('click', ['$event'])
  onClick(ev: UIEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    this.select.selectOption(this);
  }

  private select: SelectComponent;


  // ?? whats for
  setActiveStyles(): void {
    this.active = true;
  }

  setInactiveStyles(): void {
    this.active = false;
  }

  constructor(private service: SelectService) {
    this.select = this.service.getSelect();
  }
}
