import { Component, ContentChildren, ElementRef, forwardRef, QueryList, Input, OnInit, ViewChild, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionComponent } from './select-option/select-option.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { SelectService } from './select.service';
import { ActiveDescendantKeyManager, FocusOrigin } from '@angular/cdk/a11y';


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
  @Input()
  placeholder: string;

  @Input()
  selected: string; //???

  @Input()
  selectedMulti: string[] = [];

  @Input()
  required = false;

  @Input()
  disabled = false;

  @Input()
  isMulti = false;

  @ViewChild('input', { static: true }) input: ElementRef;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @ViewChild(SelectDropdownComponent, { static: true }) dropdown: SelectDropdownComponent;
  @ContentChildren(SelectOptionComponent) options: QueryList<SelectOptionComponent>;
  selectedOption: SelectOptionComponent;
  selectedOptionMulti: SelectOptionComponent[] = [];
  displayText: string;
  filterVal: string;
  private keyManager: ActiveDescendantKeyManager<SelectOptionComponent>; //?

  showDropdown() {
    this.dropdown.show();

    if (this.options.length === 0) {
      return;
    }



    // if (!this.isMulti) {
    //   this.selected
    //     ? this.keyManager.setActiveItem(this.selectedOption)
    //     : this.keyManager.setFirstItemActive();
    // }
    this.filter.nativeElement.focus();
    this.keyManager.setFirstItemActive();
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

  applyFilter(query) {
    if (query != null) {
      this.options.forEach(option => {
        if (option.value.toLowerCase().indexOf(query.toLowerCase()) == -1) {
          option.setHiding();
        } else {
          option.setShowing();
        }
        this.onChange();
      });

      return;
    }

    this.options.forEach(option => option.setShowing());
    this.onChange();
  }

  selectAll() {
    this.options.forEach(option => this.keyManager.setActiveItem(option));
    this.selectedMulti = this.options.map(option => option.key);
    this.selectedOptionMulti = this.options.toArray();
    this.displayText = this.options.map(option => option.value).join();
    this.input.nativeElement.focus();
    this.onChange();
  }

  unselectAll() {
    this.selectedMulti = [];
    this.selectedOptionMulti = [];
    this.displayText = '';
    this.input.nativeElement.focus();
    this.onChange();
  }

  selectOption(option: SelectOptionComponent) {
    if (!this.isMulti) {
      this.keyManager.setActiveItem(option);//?
      this.selected = option.key;
      this.selectedOption = option;
      this.displayText = this.selectedOption ? this.selectedOption.value : '';
      this.hideDropdown();
    }
    else {
      const idx = this.selectedOptionMulti.indexOf(option);

      if (idx !== -1) {
        this.selectedOptionMulti.splice(idx, 1);
        const keyIdx = this.selectedMulti.indexOf(option.key);
        this.selectedMulti.splice(keyIdx, 1);
        this.displayText = this.selectedOptionMulti.map(option => option.value).join();
      }
      else {
        this.selectedOptionMulti.push(option);
        this.selectedMulti.push(option.key);
        this.displayText = this.selectedOptionMulti.map(option => option.value).join();
      }
    }
    this.input.nativeElement.focus();
    this.onChange();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  /*
    Implement control value accessor methods:
    onChange()
    onTouch()
    set value(val: any) <= ngmodal name
    writeValue(value: any)  //Write value to the view if the value changes occur on the model programmatically
    registerOnChange(fn: any) // cb evoke when value in UI changed
    regiesterOnTouch(fn: any) // cb when element is touched
  */
  registerOnChange(fn: any) { //?
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedFn = fn;
  }

  onChangeFn = (_: any) => { };// ?
  onTouchedFn = () => { }; //?
  onChange() {
    if (this.isMulti) {
      this.onChangeFn(this.selectedMulti);
      return;
    }

    this.onChangeFn(this.selected);
  }

  writeValue(obj: any) {
    if (this.isMulti && obj != null) {
      this.selectedMulti.push(obj);
      return;
    }

    this.selected = obj;
  }

  onTouched() {
    this.onTouchedFn();
  }

  // -- end of control value accessor

  ngAfterViewInit(): void {
    setTimeout(() => {//??
      if (this.isMulti) {
        this.selectedOptionMulti = this.options.filter(option => this.selectedMulti.indexOf(option.key) !== -1);
        this.displayText = this.selectedOptionMulti === []
          ? ''
          : this.selectedOptionMulti.map(option => option.value).join();
      }
      else {
        this.selectedOption = this.options.toArray().find(option => option.key === this.selected);
        this.displayText = this.selectedOption ? this.selectedOption.value : '';;
      }
    });

    this.keyManager = new ActiveDescendantKeyManager(this.options)
      .withHorizontalOrientation('ltr')
      .withVerticalOrientation()
      .withWrap();
  }

  constructor(
    private selectService: SelectService) {
    this.selectService.register(this);
  }
}
