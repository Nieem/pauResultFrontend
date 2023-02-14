import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { StudentDashboardComponent } from './student-dashboard.component';
//import {
  //  TimelineComponent,
  //  NotificationComponent,
   // ChatComponent
//} from '../components';

import{
MatCardModule
}from '@angular/material'

import { StatModule } from '../../shared';
import { StudentDashboardRoutingModule } from './studentdashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StudentDashboardRoutingModule,
        StatModule,
        MatCardModule,
        Ng2Charts
    ],
    declarations: [
        StudentDashboardComponent,
       // TimelineComponent,
       // NotificationComponent,
       // ChatComponent
    ]
})
export class StudentdashboardModule { }
