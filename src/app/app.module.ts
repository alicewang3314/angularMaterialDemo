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
    CheckBoxComponent
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
  entryComponents: [MatSpinner, MorePholotDialog]
})
export class AppModule { }
