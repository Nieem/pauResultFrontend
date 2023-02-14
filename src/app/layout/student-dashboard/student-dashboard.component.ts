import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(public studentService:StudentService) { }

  ngOnInit() {

    this.studentService.getStudentDashboardData();
  }

}
