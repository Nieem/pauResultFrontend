export class Student{
 
     std_ID:number; 
     Name:string;
     Roll:string;
     Dept_ID :number;
     year:number;
     FinalUpdate:boolean;
     SpecialMarkSubmit:boolean;

    



}

export interface Semester{
    SemesterID:String;
    SemesterName:String;
    ActiveSemester:boolean;

}


export interface Dashboard{
    AccountId:number,
    Name: string,
    PhoneNo:string,
    
    Designation: string,
    DepartmentSection: string,
    Pic:string,
    
    TotalSections:number,
    currentSectionCount:number,
    completeMarksUpload:number,
    leftMarksupload: number,
    totalenrolled: number,
    Currentenrolled:number,
    CourseAdvising: boolean,
    BarChartData:BarChartDataList[],

}


export interface StudentDashboard{
    StudentId:number,
    StudentName:string,
    CGPA:string,
    
    CourseComplete: number,
    //DepartmentSection: string,
    StudentPicture:string,
    
   DateOfBirth:number,
   EarnCredit:number,
   EmailAddress:number,
   FathersName: string,
   GenderId: string,
   LocalGuardianAddress:string,
   LocalGuardianContact: string,

   LocalGuardianRelationship: string,
   MaritalStatusId:string,
   MobileNo:string,
   MothersName:string,

   Nationality:string,
   ParmanentAddress: string,
   PresentAddress:string,
   SemesterNYear: string,
   StudentAcademicData:ProfileAcademicViewModel[];
   StudentDocuments:StudentdocumentData[];

}

export class StudentdocumentData {
    
}

export class GradeBySemesterData {
    SemesterName:string;
    CourseWiseResult:CourseWiseResult[];
    
}

export class CourseListbyCurriculum {
    SemesterName:string;
    CourseWiseResult:CourseWiseResult[];
    StudentCurriculumList:StudentCurriculumList[];
}

export class StudentCurriculumList{
    
}

export class CourseWiseResult {
    
}

export class ProfileAcademicViewModel {
   // public  AccountExtEducationId:number
    public  NameOfExamination:string
    public  StartingSession:string

    public  UniversityBoard:string
    public  PassingYear:string
    public  Result:string
     public  Group:string

    }


export class BarChartDataList{
    SemesterNYear:string
    totalCourse:number
}