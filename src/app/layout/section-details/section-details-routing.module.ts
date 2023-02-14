import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SectionDetailsComponent} from './section-details.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '', component:SectionDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionDetailsRoutingModule { }
