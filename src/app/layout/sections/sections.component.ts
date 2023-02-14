import { Component, OnInit } from '@angular/core';
import{StudentService} from '../../shared/services/student.service';
import{Student} from '../../shared/services/student.model';
import{Section} from '../../shared/services/sections.model';
import{SectionDetails} from '../../shared/services/section-details.model';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import{Semester} from'../../shared/services/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

 declare var $:any;
 var sel:number;
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
       user:string;
     semesters: Semester[];
     selected1 :any=0;
    // sem:37;
    demo="hi";
    selected:any=0;
    // myData: BehaviorSubject<any> = new BehaviorSubject('hi');
    // cast = this.myData.asObservable();

   // semesters:Observable<Semester[]>
  constructor(public studentService:StudentService,http:HttpClient,public router: Router) {

    
   // this.studentService.getSemesterID().subscribe((response) => {
               
     // console.log(this.myData);
  
      
    //   http.get<Semester[]>('http://localhost:52135/api/Semester').subscribe(result => {
    //    this.semesters = result;
      
    //    this.selected1=this.semesters.find(x=>x.ActiveSemester==false).SemesterID;
    //    console.log(this.selected1);
    //    this.myData.next(this.selected1);
    //     this.selected=this.selected1;
    //     console.log('s',this.selected);
    //    this.studentService.getSectionsList(this.selected1)
    //  }, error => console.error(error));
    


     }
  
   
 
  ngOnInit(){
    
      this.studentService.myData.subscribe(u=>{this.selected1=String(u),
        this.selected=String(u)
        console.log('test',this.selected1);}
       
    );
      console.log('hihi',this.selected);
       this.studentService.getSemesterList();
       console.log('hihi',this.selected1);
   // this.studentService.getSemesterList1().subscribe(selected1=>{this.selected1=selected1});
    
   //this.selected='37';
     

      //this.studentService.getUsers().subscribe(sel=>{this.semesters=sel});
    
   // console.log(this.studentService.getSemesterList());
    console.log('val1',this.studentService.selectedSemester);
     
   console.log('s',this.selected);

   // this.studentService.getSemesterList();
   // console.log("res",this.studentService.getSemesterList());
    //console.log(this.selected1);
    //let semesters = [];
  
    console.log('val',this.studentService.selectedSemester);
     let p=this.selected1;
     console.log('p',p);

    // $(function () {
    //   var $table = $('#table');
    //   $('#toolbar').find('select').change(function () {
    //     $table.bootstrapTable('refreshOptions', {
    //       exportDataType: $(this).val()
    //     });
    //   });
    // });

   // console.log('val',this.studentService.selectedSemester);

    
    // $(function(){
    //   $('#example').DataTable();
    //   });

  }

  sectionDetails(student){
    this.router.navigate(['/layout/sectiondetails',student.SectionCode,student.TotalStudentEnrolled,student.SemesterName,student.CourseCode,student.CourseTitle], {skipLocationChange: true});

    }


  getSection(id:number) {
    this.studentService.getSectionsList(id);
    $(function(){
      $('#example').DataTable();
      });
      console.log('val',this.studentService.selectedSemester);
      console.log(this.selected1);
  }
  
  //DropdownVar1 = 0;onSelectUpdate
  DropdownVar=1;
  button=0;
  btnupdate=0;

  onSelect(x){
    this.DropdownVar = x;
    //this.DropdownVar1=1;
    this.button=x;
   this.btnupdate=x;
    console.log(x);
   }


   onSelectUpdate(x){

        this.studentService.putEmployee(x.StudentID,x)
      .subscribe(data => {
     // this.resetForm(form);
      this.studentService.getEmployeeList();
     // this.toaster.info('Record Updated Successfully!', 'Employee Register');
     console.log(x.std_ID);
    });
    }

    onSelectUpdate1(x){
      this.DropdownVar = x;
      this.button=0;
      this.btnupdate=x;
    //this.DropdownVar1=1;
     console.log(x);
    }
    
    

}
