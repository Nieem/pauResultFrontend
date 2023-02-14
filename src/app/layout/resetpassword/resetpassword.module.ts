import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../../shared';
import { HttpModule } from '@angular/http';
import { ResetpasswordComponent } from './resetpassword.component';
import { ResetpasswordRoutingModule } from './resetpassword-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [CommonModule, ResetpasswordRoutingModule, PageHeaderModule,HttpModule,FormsModule,ToastrModule.forRoot()],
    declarations: [ResetpasswordComponent]
})
export class ResetpasswordModule { }
