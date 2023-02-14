import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetpasswordComponent } from './resetpassword.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '', component: ResetpasswordComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResetpasswordRoutingModule { }
