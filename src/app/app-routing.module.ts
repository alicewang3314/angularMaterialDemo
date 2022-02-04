import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReentrantSearchComponent } from './reentrant-search/reentrant-search.component';
import { ResultComponent } from './result/result.component';
import { DetailsComponent } from './details/details.component';
import { ComponentsDisplayComponent } from './components-display/components-display.component';


const routes: Routes = [
  {
    path: 'search',
    component: ReentrantSearchComponent
  },
  {
    path: 'results',
    component: ResultComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'display',
    component: ComponentsDisplayComponent
  },
  {
    path: '**',
    redirectTo: '/display'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
