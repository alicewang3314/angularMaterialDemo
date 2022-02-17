import { Component, ContentChildren, ElementRef, forwardRef, QueryList, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionComponent } from './select-option/select-option.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { SelectService } from './select.service';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'captor-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    SelectService
  ]
})
export class SelectComponent implements AfterViewInit {
  @Input() placeholder: string;
  @Input() selected: string; //???
  @Input() required = false;
  @Input() disabled = false;
  @ViewChild('input', { static: true }) input: ElementRef;
  @ViewChild(SelectDropdownComponent, { static: true }) dropdown: SelectDropdownComponent;
  @ContentChildren(SelectOptionComponent) options: QueryList<SelectOptionComponent>;
  selectedOption: SelectOptionComponent;
  displayText: string;
  onChangeFn = (_: any) => { };// ?
  onTouchedFn = () => { }; //?
  private keyManager: ActiveDescendantKeyManager<SelectOptionComponent>; //?

  constructor(private selectService: SelectService) {
    this.selectService.register(this);
  }

  showDropdown() {
    // debugger
    this.dropdown.show();


    if (this.options.length === 0) {
      return;
    }
    this.selected
      ? this.keyManager.setActiveItem(this.selectedOption)
      : this.keyManager.setFirstItemActive();
  }

  hideDropdown() {
    this.dropdown.hide();
  }

  onDropMenuIconClick(event: UIEvent) {
    event.stopPropagation();
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.input.nativeElement.click();
    }, 10);
  }

  public onKeyDown(event: KeyboardEvent) {
    if (['Enter', ' ', 'ArrowDown', 'Down', 'ArrowUp', 'Up'].indexOf(event.key) > -1) {
      if (!this.dropdown.showing) {
        this.showDropdown();
        return;
      }

      if (!this.options.length) {
        event.preventDefault();
        return;
      }
    }

    if (event.key === 'Enter' || event.key === ' ') {
      this.selectedOption = this.keyManager.activeItem;
      this.selected = this.selectedOption.key;
      this.displayText = this.selectedOption ? this.selectedOption.value : '';
      this.hideDropdown();
      this.onChange();
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      this.dropdown.showing && this.hideDropdown();
    } else if (['ArrowUp', 'Up', 'ArrowDown', 'Down', 'ArrowRight', 'Right', 'ArrowLeft', 'Left']
      .indexOf(event.key) > -1) {
      this.keyManager.onKeydown(event);
    } else if (event.key === 'PageUp' || event.key === 'PageDown' || event.key === 'Tab') {
      this.dropdown.showing && event.preventDefault();
    }
  }

  selectOption(option: SelectOptionComponent) {
    this.keyManager.setActiveItem(option);
    this.selected = option.key;
    this.selectedOption = option;
    this.displayText = this.selectedOption ? this.selectedOption.value : '';
    this.hideDropdown();
    this.input.nativeElement.focus();
    this.onChange();
  }

  registerOnChange(fn: any) { //?
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  writeValue(obj: any) {
    this.selected = obj;
  }

  onTouched() {
    this.onTouchedFn();
  }

  onChange() {
    this.onChangeFn(this.selected);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {//??
      this.selectedOption = this.options.toArray().find(option => option.key === this.selected);
      this.displayText = this.selectedOption ? this.selectedOption.value : '';
      this.keyManager = new ActiveDescendantKeyManager(this.options)
        .withHorizontalOrientation('ltr')
        .withVerticalOrientation()
        .withWrap();
    });
  }
}
