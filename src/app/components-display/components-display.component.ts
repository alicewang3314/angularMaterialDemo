import { Component, OnInit } from '@angular/core';
import { ModalWindowsComponent } from 'src/app/components/modal-windows/modal-windows.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-components-display',
  templateUrl: './components-display.component.html',
  styleUrls: ['./components-display.component.scss']
})
export class ComponentsDisplayComponent implements OnInit {
  test: any;
  testMulti: any;
  isPure = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  toggle(ev) {
    const { checked } = ev;
    this.isPure = checked;
  }

  open() {
    this.dialog.open(ModalWindowsComponent, {
      width: '37vw',
      maxWidth: '100vw'
    });
  }
}
