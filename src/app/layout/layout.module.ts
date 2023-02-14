import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{HttpModule}from '@angular/http';

import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
// import { TestformComponent } from './testform/testform.component';
//import { SectionsComponent } from './sections/sections.component';
//import { SectionDetailsComponent } from './section-details/section-details.component';
//import { StudentProfileComponent } from './student-profile/student-profile.component';
//import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
//import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        
        
        
        
       
       
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule {}
