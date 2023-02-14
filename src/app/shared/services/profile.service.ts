import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProfileViewModel } from './profile.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
 })
export class ProfileService {

  
  profiledataList:ProfileViewModel[];

  constructor(private http:HttpClient)
      { }
      //retrive data
      getEmployeeList(){
        this.http
      .get<ProfileViewModel[]>('http://localhost:52135/api/Profile')
      .subscribe(result => {
        this.profiledataList = result;     
      }, error => console.error(error));
      }

      
  

      // getEmployeeList():Promise<any>{
      //   return this.http.get
      //   ('http://localhost:52135/api/Profile?LoginId=180049')
      //   .map(res=>res.json().Data).toPromise()
        
      // }



      

}
