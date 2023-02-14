import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import{StudentService} from '../shared/services/student.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    isLoginError:boolean = false;
    constructor(public router: Router,public studentService:StudentService) {}

    ngOnInit() {
        this.resetForm();
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate[('dashboard')]
    }

    onSubmit(form:NgForm){
        
        let userId = form.value.loginIdentity;
        let password = form.value.password;
        debugger;
        this.studentService.postUserAuthentication(userId,password)
            .subscribe((data:any)=>
            {
                debugger;
                localStorage.setItem("userToken",data.access_token);
                localStorage.setItem("uID",userId);
                console.log(userId.length);
                if(userId.length<=6)
                this.router.navigate(['/dashboard']);
                 else
                this.router.navigate(['/studentdashboard']);

                
            },
            (error:HttpErrorResponse)=>{
                this.isLoginError = true;
            }
        );
       

     }
      

    resetForm(form?: NgForm) {
        if (form != null)
          form.reset();
       this.studentService.selectedUser = {
        loginIdentity:null,
        password:null,
        name:null,
        email:null,
        loginTime:null
       }
     }



}
