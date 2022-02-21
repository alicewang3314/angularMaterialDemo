import { Component, Input, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { SelectComponent } from '../select.component';
import { SelectService } from '../select.service';

@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
  // host: { tabIndex: '-1' }
})
export class SelectOptionComponent {
  @Input() key: string;

  @Input() value: string;

  @HostBinding('class.selected')
  get selected(): boolean {
    return this.select.selectedOption === this || this.select.selectedOptionMulti.indexOf(this) !== -1;
  }

  @HostBinding('class.hide') hide = false;

  @HostBinding('class.active') active = false;

  @HostListener('click', ['$event'])
  onClick(ev: UIEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    this.select.selectOption(this);
  }

  // disabled = false;

  private select: SelectComponent;

  get isHided() {
    return this.hide;
  }

  setHiding(): void {
    // this.disabled = true;
    this.hide = true;
  }

  setShowing(): void {
    this.hide = false;
  }

  setActiveStyles(): void {
    this.active = true;
  }

  setInactiveStyles(): void {
    this.active = false;
  }

  scrollDownFocus() {
    this.element.nativeElement.scrollIntoView(false);
  }

  scrollUpFocus() {
    this.element.nativeElement.scrollIntoView();
  }

  focus(): void {
    this.element.nativeElement.focus();
  }

  constructor(
    private service: SelectService,
    private element: ElementRef) {
    this.select = this.service.getSelect();
  }
}
