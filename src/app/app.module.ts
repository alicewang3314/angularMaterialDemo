import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReentrantSearchComponent } from './reentrant-search/reentrant-search.component';
import { ResultGridViewComponent } from './result-grid-view/result-grid-view.component';
import { ResultComponent } from './result/result.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { DetailsComponent, MorePholotDialog } from './details/details.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { RouterService } from 'src/app/service/router.service';
import { MatSpinner } from '@angular/material/progress-spinner';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { SingleSelectDropdownComponent } from './components/single-select-dropdown/single-select-dropdown.component';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { LargeTilesComponent } from './components/large-tiles/large-tiles.component';
import { ComponentsDisplayComponent } from './components-display/components-display.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ListBoxComponent } from './components/list-box/list-box.component';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { ModalWindowsComponent } from './components/modal-windows/modal-windows.component';
import { TestpageComponent } from './testpage/testpage.component';
import { SelectComponent } from './components/select/select.component';
import { SelectOptionComponent } from './components/select/select-option/select-option.component';
import { SelectDropdownComponent } from './components/select/select-dropdown/select-dropdown.component';
import { HomeComponent } from './home/home.component';
import { ComponentDisplayPureComponent, DialogContent } from './component-display-pure/component-display-pure.component';

@NgModule({
  declarations: [
    AppComponent,
    ReentrantSearchComponent,
    ResultGridViewComponent,
    ResultComponent,
    FlipCardComponent,
    DetailsComponent,
    ResultTableComponent,
    MorePholotDialog,
    AddButtonComponent,
    SingleSelectDropdownComponent,
    MultiSelectDropdownComponent,
    SwitchButtonComponent,
    TilesComponent,
    LargeTilesComponent,
    ComponentsDisplayComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    ListBoxComponent,
    AccordionsComponent,
    ModalWindowsComponent,
    TestpageComponent,
    SelectComponent,
    SelectOptionComponent,
    SelectDropdownComponent,
    HomeComponent,
    ComponentDisplayPureComponent,
    DialogContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [RouterService],
  bootstrap: [AppComponent],
  entryComponents: [MatSpinner, MorePholotDialog, ModalWindowsComponent, DialogContent]
})
export class AppModule { }
