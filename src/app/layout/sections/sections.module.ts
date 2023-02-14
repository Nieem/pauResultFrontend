import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpModule}from '@angular/http';

import{SectionsRoutingModule} from './sections-routing.module';
import{SectionsComponent} from './sections.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatSelectModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,SectionsRoutingModule,HttpModule,FormsModule,MatSelectModule,HttpClientModule
  ],
  declarations: [SectionsComponent]
})
export class SectionsModule { }
