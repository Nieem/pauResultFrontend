//import {Api} from './api';
export class ProfileViewModel {
        public  AccountId :number;
        public  Name :string;
        public  Email :string;
        //[Remote("CheckPhoneForAccount", "Check", ErrorMessage = "This phone number is occupied by another User.")]
        public  PhoneNo :string;
        public  TeleExchange :string;
        public  Designation :string;
        public  DepartmentSection :string;
        public  LoginIdentity :string;
        public  Password :string;
        public AccountsRoleId :number;
        public  Pic :string;
        public  Status :boolean;
        public  PartimeTeacher :boolean;
        public  ExpireDate :Date;
        public  CreatedDate :Date;
        public Deactivate :boolean;
        public  CauseOfDeactivate :string;
        public TeporaryBlock :boolean;
        public  TemporaryBlockExpireDate :Date;
        public  LastPsswordChange:string;

        //==================== Education ======================================

        public ProfileEducation:ProfileEducationViewModel[];


        //================   Professional activity ====================================
        public ProfileProfessionalActivity:ProfileProfesionalActivityViewModel


        //=====================================================

        public ProfileProject:ProfileProjectViewModel


        //====================== Metainformation=====================================

        public  ProfileMetainformation:ProfileMetainfoViewModel


        //======================  MetaProfessional ====================================\
        public  ProfileMetaProfessional:ProfileMetaProfesionalViewModel


}



  export class ProfileEducationViewModel {
        public  AccountExtEducationId:number
        public  NameOfExamination:string
        public  StartingSession:string

        public  UniversityBoard:string
        public  PassingYear:string
        public  Result:string
        public  SubjectStudied:string
        }


export class ProfileProfesionalActivityViewModel {
    public AccountExtProfessionalActivityId:number
        public  AttendType:string
        public  DateOfActivity:string
        public  Location:string
        public  Description:string

}


export class ProfileProjectViewModel {
        public  AccountExtProjectId:number
        public ProjectTitle: string
        public  ShortDescription:string
        public  project_Location:string
        public  ProjectStratedDate:Date
        public  ProjectCompletedDate:Date
}

export class ProfileMetainfoViewModel {
    public  AccountMetaInformationId:number
        public  FatherName:string
        public  MothersName:string
        public  MaritalStatusId:number
        public  SpouceName:string
        public  BloodGroupsId:number
        public  GenderId:number
        public  CurrentAddress:string
        public  PermanentAddress:string
        public  DateOfBirth:Date
        public  JoiningDateTime:Date

}

export class ProfileMetaProfesionalViewModel {
        public  AccountMetaProfessionalId:number
        public  BackGround:string
        public  ResearchInterest:string
        public  PhdSuperVision:string
        public  Publication:string
        public  MediaContriBution:number


    }



    export class ChartData{

        totalCourse:number;
        SemesterNYear:string
    }