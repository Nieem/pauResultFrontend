import { SectionDetails } from './../../shared/services/section-details.model';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { Student } from '../../shared/services/student.model';
//import { SectionDetails } from '../../shared/services/section-details.model';

import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';

import { Subject } from 'rxjs';
//import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';

import { formatDate } from '@angular/common';
declare var $: any;

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.scss']
})
export class SectionDetailsComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  sectionDetailsList: SectionDetails[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  dataexist = 1;
  id: any = 0;

  today = new Date();
  jstoday = '';
  student: Student[];
  courscode: string = 'hi';
  courstitle: string = 'hi';
  semestername: string = 'hi';
  totalStudents: number = 0;
  report = [];
  constructor(public studentService: StudentService, private toaster: ToastrService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }



  // ngOnInit():void{



  // bootstap table
  //   let id = this.route.snapshot.paramMap.get('id');

  //   this.studentService.getSectionDetailsList(id);


  //  $(function(){    
  //   $('#sectiondetails').DataTable();
  //   });





  // }



  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.totalStudents = +this.route.snapshot.paramMap.get('id1');
    this.semestername = this.route.snapshot.paramMap.get('id2');
    this.courscode = this.route.snapshot.paramMap.get('id3');
    this.courstitle = this.route.snapshot.paramMap.get('id4');


    this.jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:s', 'en-US');
    console.log(this.jstoday);



    this.SectionDetailsData();



  }


  SectionDetailsData() {

    // trying to using behavior subject:not work:last value preserve

    // this.studentService.getSectionDetailsList(this.id);
    // this.studentService.reportData.subscribe(data=>{
    //   this.semestername=data.SemesterName;
    //   this.courstitle=data.CourseTitle;
    //   this.courscode=data.CourseCode;
    //   //console.log('report',this.sectionDetailsList[0].SemesterName);
    //  // this.coursename=this.sectionDetailsList[0].SemesterName;

    // } )


    //  console.log('c',this.coursename);
    let courseTitle = this.courstitle;
    let semesterName = this.semestername;
    let courseCode = this.courscode;
    let total = this.totalStudents;
    let name = localStorage.getItem('Name');
    let desig = localStorage.getItem('Designation');
    let printdate = this.jstoday;
    let ExportedData = 'PRIMEASIA UNIVERSITY';
    // let coursename='B.Sc (Honours) in Biochemistry';
    // let coursename=localStorage.getItem('Name');
    //  this.getDataTable();
    this.dtOptions = {
      // pagingType: 'full_numbers',
      // pageLength: 10,
      // retrieve:true,

      //  destroy:true,






      dom: 'Bfrtip',
      //  columns: [
      //   { data: 'StudentID' },
      //   { data: 'StudentName' },
      //   { data: 'LetterGrade' },
      //   { data: 'LetterGrade' },
      //   { data: 'Actions' }
      // ],
      buttons: [
        // 'columnsToggle',
        // 'colvis',
        // 'copy',
        //  {
        //    extend: 'csv',
        //    text: 'CSV export',
        //    fieldSeparator: ';',
        //    exportOption: [1, 2, 3]
        //  },
        //'pdf',
        //  'print',
        // 'excel',


        {
          extend: 'print', footer:true,         
          header: true,
          title: '',
          text: 'Print',
          pagemargin: [10,120,10,70],
          // margin: [ 20, 0, 50, 0 ],
           pageSize:'A4',
          // alignment: 'right',
          orientation: 'verticle',
           

          exportOptions: {
            columns: [0, 1, 2, 7,8,9],
          },
          customize: function (win) {

            $(win.document.body)
            .css('margin-bottom', '100px')
             .css( 'font-size', '10pt' )
              .css('margin-left', '0').prepend('<label style="position:absolute; top:20; left:270;bottom:400;font-size:25px">' + ExportedData + '<label/><label style="position:absolute;top:35; left:60;font-size:13px">' + courseTitle + '<label/><br><label style="position:relative;left:-15;font-size:11px"><u>Student Result of Proposed Section.<u/><label/>')
              .prepend('<label style="position:absolute;top:90;left:20;">Course Code&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;' + courseCode + '</label><br><label style="position:absolute;top:110;left:20;">Semester &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;' + semesterName + '</label><br><label style="position:absolute;top:130;left:20;">Course Teacher:&nbsp;' + name + '</label><br><label style="position:absolute;top:150;left:20;">Total Students &nbsp;:&nbsp;' + total + '</label>')
              .prepend(
                '<img src="assets/images/universitylogo.png" style="position:absolute; top:0; left:0;" />'
              )
              
              //.apppend('<footer><p>footer<p/> <footer/>')
              //.prepend('<label style="position:absolute;top:0;left:585;font-size:8px">Date of Issue:&nbsp;' + printdate + '</label><label style="position:absolute;top:10;left:600;font-size:8px">Powered by UMS</label>')
              //.append('<label style="position:absolute;top:700;left:20;">' + name + '</label><br><label style="position:absolute;top:720;left:20;">' + desig + '</label><br><label style="position:absolute;top:740;left:20;">------------------</label><br><label style="position:absolute;top:760;left:20;">Printed by</label><br><label style="position:absolute;top:790;left:20;">Date:&nbsp;' + printdate + '</label>');
              //.prepend('<label style="position:fixed;top:0;bottom:07;left:300;font-size:8px">Date of Issue:&nbsp;' + printdate + '</label><label style="position:fixed;bottom:2;left:300;font-size:8px">Powered by UMS</label>')
             

            $(win.document.body).find('tab le')
              .css('margin-bottom', '100px')
              .css('margin-top', '110px')
              .css('text-align', 'center')
              .css('position','absolute')
              .addClass( 'compact' )
              .css( 'font-size', 'inherit' )
              .append(' <b style="top:25;bottom:0;text-align:center;font-size:10px">Printed by</b><br/>')
              .append(' <b style="top:35;bottom:0;text-align:center;font-size:10px">'+name+'</b><br/><br/><br/>');


          }


        },

      ]


    };





    this.http.
      get<SectionDetails[]>('http://localhost:52135/api/Section/SectionStudent?SectionID=' + this.id)
      .subscribe(result => {
        this.sectionDetailsList = result;
        // this.coursename=this.sectionDetailsList[0].StudentName;
        //console.log('tut',this.coursename);

        // this.http.get('http://localhost:52135/api/Section?SectionID='+this.id).subscribe(result => {
        //    this.sectionDetailsList = result.json() as SectionDetails[];

        // this.dataexist=1;

        this.dtTrigger.next();

        // this.dataexist=1;


      }, error => console.error(error));





    // this.http.get('data/data.json')
    //   .map(this.extractData)
    //   .subscribe(persons => {
    //     this.persons = persons;
    // Calling the DT trigger to manually render the table
    // this.dtTrigger.next();
    // });
  }


  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }



  ngAfterViewInit(): void {


  }



  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.data || {};
  // }


  onRowClick(x) {
    console.log(x.StudentName);
  }



  DropdownVar = 1;
  button = 0;
  btnupdate = 0;
  flag1 = 0;
  flag2 = 0;
  editVal = 0;
  finaleEditValue = 0;
  midEditValue = 0;
  defaultClassTestMark = 25;
  defaultAttendanceMark = 5;
  defaultMidMark = 20;
  defaultFinalMark = 50;

  tempClassTestMark = 0;
  tempAttendanceMark = 0;
  tempMidMark = 0;
  tempFinalMark = 0;



  onSelectEdit(x) {

    this.DropdownVar = x;
    //this.DropdownVar1=1;
    // this.studentService.selectedStudentid = Object.assign({}, x);
    this.button = x;
    this.btnupdate = x;
    this.flag1 = x.LetterGrade;
    this.flag2 = x.ConfirmLetterGrade;
    //debugger;
    if ((x != null && (x.SemesterMidTerm == true && x.HighLight == true && x.ConfirmSubmitByFaculty == false && (x.ExpireDateTime >= this.jstoday))) || (x != null && x.SpecialMarkSubmit == true)) {
      this.midEditValue = x;
    }

    if ((x != null && (x.SemesterFinalTerm == true && x.SpecialGradeuploadDeadLine >= this.jstoday)) || (x != null && x.SpecialMarkSubmit == true)) {
      this.finaleEditValue = x;
    }

    console.log(x);
    // console.log(this.studentService.selectedStudentid.LetterGrade);

  }




  onSelectUpdate(x) {
    debugger;
    let uid = localStorage.getItem('uID');
    console.log(uid);

    if (x != null) {
      if (x.SemesterMidTerm == true || x.SemesterFinalTerm == true || x.SpecialMarkSubmit == true) {

        this.tempClassTestMark = x.ClassTest;
        this.tempAttendanceMark = x.Attendance;
        this.tempMidMark = x.Midterm;
        this.tempFinalMark = x.FinalTerm;

        if ((this.tempMidMark == null || this.tempMidMark < 0 || this.tempMidMark > this.defaultMidMark)
          || (this.tempFinalMark == null || this.tempFinalMark < 0 || this.tempFinalMark > this.defaultFinalMark
            || (this.tempClassTestMark == null || this.tempClassTestMark < 0 || this.tempClassTestMark > this.defaultClassTestMark)
            || (this.tempAttendanceMark == null || this.tempAttendanceMark < 0 || this.tempAttendanceMark > this.defaultAttendanceMark))) {
          this.toaster.error("Marks Entry Format Error");
        }


        else {
          if (x.SpecialMarkSubmit == true) {

            this.DropdownVar = 0;
            this.midEditValue = 0;
            this.finaleEditValue = 0;
            x.Modify_By = uid;

          }
          else {

            if (x.SemesterMidTerm == true) {
              this.button = x;
              this.btnupdate = 0;
              this.midEditValue = 0;
              x.Entry_By = uid;
            }
            else {
              this.button = x;
              this.btnupdate = 0;
              this.finaleEditValue = 0;
              x.Entry_By = uid;
            }
          }

          x.FinalUpdate = false;
          debugger;
          let item = [];
          item.push(x);
          this.studentService.putEmployee(x.StudentID, item)
            .subscribe(data => {
              //this.studentService.getSectionDetailsList(x.SectionID);

              this.http
                .get<SectionDetails[]>('http://localhost:52135/api/Section/SectionStudent?SectionID=' + x.SectionID)
                .subscribe(result => {
                  this.sectionDetailsList = result;
                });


              this.toaster.info('Record Updated Successfully!', 'Student Marks');
              console.log(x.SectionID);
            });

        }
      }

    }
  }




  onSelectCancel(x) {
    // this.rerender();
    this.DropdownVar = 0;
    this.button = 0;
    this.btnupdate = 0;
    x.LetterGrade = this.flag1;
    x.ConfirmLetterGrade = this.flag2;
    this.editVal = 0;
    this.midEditValue = 0;
    this.finaleEditValue = 0;
    //this.DropdownVar1=1;
    // this.studentService.getSectionDetailsList(x.SectionID);




    //this.router.navigate(['/sectiondetails',14]);
    // console.log(x);


  }


  back() {
    this.router.navigate(['/layout/sections']);
  }

  onFinalSubmit(list) {

    let idlist = [];
    let ids: string = '';
    let sectionID: number;
    let y = []
    for (let index of list) {
      if (index.Midterm == '' || index.FinalTerm == '') {
        console.log(index.LetterGrade);
        idlist.push(index.StudentID);
      }

      sectionID = index.SectionID;
      y.push(index);
      console.log(y);
    }
    console.log(idlist);
    let i = 0;
    let s = '';
    for (let k of idlist) {
      if (i > 0) {
        s = ','
      }

      ids += s + k;
      i++;
    }
    //  if(idlist.length>0){
    //   this.toaster.error('Please add marks for Students:',ids);              
    //    }
    //  else{}
    this.studentService.putSectionUpdate(sectionID, y).subscribe(data => {
      this.toaster.info('Teachers Final Submit done');
    });
    this.btnupdate = 0;
    this.button = 0;
    this.midEditValue = 0;
    this.finaleEditValue = 0;




  }

}




