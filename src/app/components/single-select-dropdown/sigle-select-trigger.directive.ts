import { Directive, Input, ElementRef, ViewContainerRef } from '@angular/core';
import { SingleSelectDropdownComponent } from './single-select-dropdown.component';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[singleSelectTrigger]',
  host: {
    '(click)': 'toggleDropdown()'
  }
})
export class SigleSelectTriggerDirective {
  private isOpen = false;
  overlayRef: any;
  @Input('singleSelectTrigger') public singleSelectDropdown: SingleSelectDropdownComponent; // why input singleSelect trigger
  subscription: Subscription;

  constructor(
    private overlay: Overlay,
    private eleRef: ElementRef,
    private viewContainerRef: ViewContainerRef) { }

  openDropdown() {
    this.isOpen = true;
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.eleRef)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8
          }
        ])
    });

    const templatePortal = new TemplatePortal(
      this.singleSelectDropdown.templateRef,
      this.viewContainerRef
    );
    this.overlayRef.attach(templatePortal);
    this.subscription = this.dropdownClose().subscribe(() => this.destroyDropdown());
  }

  private dropdownClose(): Observable<MouseEvent | void> {
    const backdropClick$ = this.overlayRef.backdropClick();
    const detachment$ = this.overlayRef.detachments();
    const dropdownClosed = this.singleSelectDropdown.dropdownClosed;

    return merge(backdropClick$, detachment$, dropdownClosed);
  }

  toggleDropdown() {
    this.isOpen ? this.destroyDropdown() : this.openDropdown();
  }

  // afterDropdownClosing() { }

  private destroyDropdown() {
    if (!this.overlayRef || !this.isOpen) {
      return;
    }

    this.subscription.unsubscribe();
    this.isOpen = false;
    this.overlayRef.detach();
  }
}
