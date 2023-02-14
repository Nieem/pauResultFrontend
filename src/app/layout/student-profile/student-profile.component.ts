import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../shared/services/profile.service'

import { StudentService } from '../../shared/services/student.service';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  keys: String[];
   goodResponse = [];
   a=[];
  objectKeys = Object.keys;
  items = { keyOne: 'value 1', keyTwo: 'value 2', keyThree: 'value 3' };

    constructor(public studentService:StudentService) {}

  ngOnInit() {

    this.studentService.getStudentDashboardData();
    this.studentService.getGradeBysemesterData();
    this.studentService.GetcourseListbyCurriculum();

  //  let evilResponseProps = Object.keys( this.a);
    
  //   for ( let prop of evilResponseProps) { 
  //     this.goodResponse.push(evilResponseProps[prop]);
  //     console.log(this.goodResponse);
  // }


  console.log(this.a);
  }

}
