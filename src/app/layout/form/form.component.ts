import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ProfileService} from '../../shared/services/profile.service'
import { ProfileViewModel } from '../../shared/services/profile.model';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    profiledataList: ProfileViewModel[];
    profileEducation: any[];

    constructor(public profileService:ProfileService) {}
    
    ngOnInit() {

         this.profileService.getEmployeeList();
    //    this.profiledataList=[];
    //    this.profileEducation=[];
       
    //    this.profileService.getEmployeeList().then((response:any)=>{
    //     this.profiledataList.push(response);
    //     this.profileEducation.push(response.ProfileEducation
    //     );
    //     debugger;
    //   });
    }



   
}
