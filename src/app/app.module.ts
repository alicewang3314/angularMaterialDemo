import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReentrantSearchComponent } from './reentrant-search/reentrant-search.component';
import { ResultGridViewComponent } from './result-grid-view/result-grid-view.component';
import { ResultComponent } from './result/result.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { DetailsComponent } from './details/details.component';
import {ResultTableComponent} from './result-table/result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ReentrantSearchComponent,
    ResultGridViewComponent,
    ResultComponent,
    FlipCardComponent,
    DetailsComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
