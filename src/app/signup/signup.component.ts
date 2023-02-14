import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { routerTransition } from '../router.animations';
import{StudentService} from '../shared/services/student.service';
import { LoginUpdate } from '../shared/services/login-update.model';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    [x: string]: any;
    isMailError:boolean = false;
     user:LoginUpdate;
    constructor(public studentService:StudentService,public router: Router) {}

    ngOnInit() {
        this.resetForm();
    }

    onConfirm(form:NgForm){
        debugger;
       let loginIdentity= form.value.loginIdentity;
        let email = form.value.email;
        this.studentService.postUserAuthSend(loginIdentity,email).subscribe((data:any)=>{
            this.router.navigateByUrl('/login');
        },
        (error:HttpErrorResponse)=>{
                this.isMailError = true;
        }
    );
        debugger;
    }


    resetForm(form?: NgForm) {
        if (form != null)
          form.reset();
       this.studentService.mailedUser = {
        loginIdentity:null,
        email:null,
       }
     }
}
