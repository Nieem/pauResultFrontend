import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../shared/services/student.service';
import { LoginUpdate } from '../../shared/services/login-update.model';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
         isMailError:boolean=false;
  constructor(public studentService:StudentService,public router: Router,private toaster: ToastrService,) { }

  ngOnInit() {
    this.resetForm();
  }



  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
   this.studentService.resetPassword = {
    OldPassword:null,
    NewPassword:null,
   }

 }



 onConfirm(form:NgForm){
  debugger;
 let oldPassword= form.value.OldPassword;
  let newPassword = form.value.NewPassword;
  this.studentService.putUserPasswordSend(oldPassword,newPassword).subscribe((data:any)=>{

    this.toaster.info('Password Updated Successfully!', 'User Password');
    localStorage.removeItem('userToken');
    //this.router.navigateByUrl('/login');
  },
  (error:HttpErrorResponse)=>{
          this.isMailError = true;
  }
);
  debugger;
}

}
