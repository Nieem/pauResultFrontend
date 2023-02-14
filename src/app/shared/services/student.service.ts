import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, RequestMethod,HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import{Student, Semester,Dashboard, BarChartDataList, StudentDashboard, GradeBySemesterData, CourseListbyCurriculum} from'./student.model';
import { Section } from './sections.model';
import { SectionDetails } from './section-details.model';
import { map } from 'rxjs/internal/operators/map';
//import { HttpClient } from 'selenium-webdriver/http';
import { BehaviorSubject, Subject } from 'rxjs';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Login } from './login.model';
import { LoginUpdate } from './login-update.model';
import { ResetPassword } from './reset-password.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  resetPassword:ResetPassword;
  mailedUser:LoginUpdate;
   selectedUser:Login;
    selectedStudent:Student;
    selectedStudentid:SectionDetails;
     studentList:Student[];
     sectionList:Section[];

     sectionDetailsList:SectionDetails[];
      gradebysemesterData:any[];
      courseListBycurriculam:any[];
      gradeSingle:any[];

     semesters:Semester[];
     selectedSemester:any=0;
     selectedUid:any=0;
     dashBoardData:Dashboard[];

     studentdashBoardData:StudentDashboard[];
     StudentID: BehaviorSubject<StudentDashboard> = new BehaviorSubject(null);
     myData: BehaviorSubject<Semester> = new BehaviorSubject(null);
     cast = this.myData.asObservable();
     reportData: BehaviorSubject<SectionDetails> = new BehaviorSubject(null);
     castReport = this.reportData.asObservable();
   //  BarChartDataList:BehaviorSubject<BarChartDataList>=new BehaviorSubject(null);
    // barchartLabels:Dashboard[];
    subject: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
    subject1: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
    cast1=this.subject.asObservable();
    cast2=this.subject1.asObservable();
    public BarChartData: Array<any>=[];
    public BarChartLabels:Array<any>=[];

     BarChartData1:BarChartDataList[]=[];
   constructor(private http:HttpClient) {
     
    
   }

   
  postUserAuthSend(userId,email){
    
   var body = JSON.stringify({["LoginIdentity"]:userId,["Email"]:email});
   debugger;
   var headerOptions = new HttpHeaders({'Content-Type':'application/json','No-Auth':'True'});
   return this.http.post('http://localhost:52135/api/Auth',body,{headers:headerOptions});
  }


   //reset password
    putUserPasswordSend(oldPass,newPass){
    
      var body = JSON.stringify({["OldPassword"]:oldPass,["NewPassword"]:newPass});
      debugger;
      var headerOptions = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.put('http://localhost:52135/api/Auth',body,{headers:headerOptions});

      }
    

    putSectionUpdate(SectionID1,y) {
      y.FinalUpdate = true; 
      var body = JSON.stringify(y);
      var headerOptions = new HttpHeaders({'Content-Type':'application/json'});
        //return this.http.put('http://localhost:52135/api/Section/'+body,y).map(x=>x);
        return this.http.put('http://localhost:52135/api/Section/'+SectionID1 ,body,{headers:headerOptions}).map(x => x);

        
       }

   postUserAuthentication(userId,password){
    var data= "username="+userId+"&password="+password+"&grant_type=password";
    var headersValue =new HttpHeaders({'Content-Type':'application/x-www-urlencoded','No-Auth':'True'});
    return this.http.post('http://localhost:52135/token',data,{headers:headersValue});
  }



  postEmployee(emp : Student){
    var body = JSON.stringify(emp);
    //var headerOptions = new Headers({'Content-Type':'application/json'});
  //  var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : HttpHeaders});
    return this.http.post('http://localhost:52135/api/Students',body).map(x => x);
  }
 
  putEmployee(id,emp) { 
    debugger;
    var body = JSON.stringify(emp);
    var headerOptions = new HttpHeaders({'Content-Type':'application/json'});
    //var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:52135/api/Section/'+id ,body,{headers:headerOptions}).map(res => res);

    //.map(res => res)
  }
 
getSemesterList(){

     return this.http.get<Semester[]>('http://localhost:52135/api/Semester').subscribe(result => {
      this.semesters = result;
      this.selectedSemester=this.semesters.find(x=>x.ActiveSemester==true).SemesterID;
     // this.selectedSemester=this.semesters.SemesterID;
       // for default semester load

      this.myData.next(this.selectedSemester);

      console.log('t',this.selectedSemester)
      this.getSectionsList(this.selectedSemester)
     
  }, error => console.error(error));
}



getSemesterID():Observable<Semester>{
  return this.http.get<Semester>('http://localhost:52135/api/Semester',{});
}

//  getSemesterList1(){
//   this.http.get('http://localhost:52135/api/Semester')
//    .map((data : Response) =>{
//     return data.json() as Semester[];
//    }).
//     toPromise().then(x => {
//      this.semesters = x;


//    })
// }


    

  getEmployeeList(){
    this.http.get('http://localhost:52135/api/Students')
     .map((data : Response) =>{
      return data.json() as Student[];
    }).toPromise().then(x => {
      this.studentList = x;
    })
  }
 


  // getSectionsList(id:number|string){
  //   this.http.get('http://localhost:52135/api/Section?SemesterID='+id)
  //    .map((data : Response) =>{
  //     return data.json() as Section[];
  //   }).toPromise().then(x => {
  //     this.sectionList = x;
  //   })
  // }



getSectionsList(id:number|string){
   
    this.http.get<Section[]>('http://localhost:52135/api/Section/get?SemesterID='+id)
    .subscribe(result => {
      this.sectionList = result;  
     }, error => console.error(error));
  }


  getSectionDetailsList(id: number | string){
    // this.http.get('http://localhost:52135/api/Section?SectionID='+id)
    //  .map((data : Response) =>{
    //   return data.json() as SectionDetails[];
    // }).toPromise().then(x => {
    //   this.sectionDetailsList = x;
    // })


    this.http
    .get<SectionDetails[]>('http://localhost:52135/api/Section/SectionStudent?SectionID='+id)
    .subscribe(result => {
     this.sectionDetailsList = result;
     let d=this.sectionDetailsList[0];
    this.reportData.next(d);
    console.log('update list',this.sectionDetailsList);
     }, error => console.error(error));


  }





  getDashboardData(){
    // this.http.get('http://localhost:52135/api/Dashboard?LoginId=140055')
    //  .map((data : Response) =>{
    //   return data.json() as Dashboard[];
    // }).toPromise().then(x => {
    //   this.dashBoardData = x;
    // })
    // this.http.get<Dashboard[]>('http://localhost:52135/api/Dashboard?LoginId=140055').subscribe(result => {
    //   this.dashBoardData = result;     
    // }, error => console.error(error));

    this.http
    .get<Dashboard[]>('http://localhost:52135/api/Dashboard/get')
    .subscribe(result => {
      this.dashBoardData = result; 
      localStorage.setItem('Name',this.dashBoardData.find(x=>x.AccountId>0).Name)
      localStorage.setItem('Designation',this.dashBoardData.find(x=>x.AccountId>0).Designation)
     // this.selectedUid=this.dashBoardData.find(x=>x.AccountId!=0).AccountId;
     this.selectedUid=localStorage.getItem('uID');
     console.log(this.selectedUid);
      this.StudentID.next(this.selectedUid);
    }, error => console.error(error));
    
     

  }

  getStudentDashboardData(){
     this.http
       .get<StudentDashboard[]>('http://localhost:52135/api/Dashboard/StudentDashboard')
       .subscribe(result => {
       this.studentdashBoardData = result; 
       this.selectedUid=this.studentdashBoardData.find(x=>x.StudentId!=0).StudentId;
          console.log(this.selectedUid);
       this.StudentID.next(this.selectedUid);
        localStorage.setItem('Name',this.dashBoardData.find(x=>x.AccountId>0).Name)
       localStorage.setItem('Designation',this.dashBoardData.find(x=>x.AccountId>0).Designation)
      
    }, error => console.error(error));

  }

getGradeBysemesterData(){
  this.http
       .get<GradeBySemesterData[]>('http://localhost:52135/api/Dashboard/StudentGradeBySemester')
       .subscribe(result => {
      this.gradebysemesterData = result; 
       // this.gradeSingle = this.gradebysemesterData[0];
      // var i=2;
       // console.log(this.gradebysemesterData);
        },error => console.error(error));
      

  }


  GetcourseListbyCurriculum(){
    this.http
         .get<CourseListbyCurriculum[]>('http://localhost:52135/api/Dashboard/GetcourseListbyCurriculum')
         .subscribe(result => {
        this.courseListBycurriculam = result; 
         // this.gradeSingle = this.gradebysemesterData[0];
        // var i=2;
         // console.log(this.gradebysemesterData);
          },error => console.error(error));
        
  
    }



  // getChartData():Observable<Dashboard>{



  //   return this.http.get<Dashboard>('http://localhost:52135/api/Dashboard?LoginId=140055',{});


  // }
  


  public getChartData(){

    this.http
    .get('http://localhost:52135/api/Dashboard/get')
    .subscribe((result:Dashboard[]) => {

          this.dashBoardData = result.filter(r=>{
        
         return  r.TotalSections>=0;
    }); 
    

  //    this.dashBoardData.forEach(u=>{
  //          this.BarChartData.push(u.BarChartData.find(k=>k.totalCourse>=0).totalCourse)
  //    });

      for(let p of this.dashBoardData){
           
            for(let q of p.BarChartData){
              
              // this.BarChartData.push(q)
               this.BarChartLabels.push(q.SemesterNYear)
               // this.BarChartLabels.push(q.SemesterNYear)
               // debugger;  
                
            }
            this.BarChartData=['a','b','c','d'];
           
            this.subject1.next(this.BarChartData);
           // this.subject.next(this.BarChartLabels[0]);
        }
        
       
                
  });


}












  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:52135/api/Students/' + id).map(res => res);
  }

}
