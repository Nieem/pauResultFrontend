import { NgModule } from '@angular/core';
import {HttpModule}from '@angular/http';
import { CommonModule } from '@angular/common';
import{SectionDetailsRoutingModule} from './section-details-routing.module';
import{SectionDetailsComponent} from './section-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,SectionDetailsRoutingModule,HttpModule,FormsModule,DataTablesModule,ToastrModule.forRoot()
  ],
  declarations: [SectionDetailsComponent]
})
export class SectionDetailsModule { }
