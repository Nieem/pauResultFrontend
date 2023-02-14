import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { }

  public LoadData()
     {
       const url="gg";
       const response=this.http.get(url).map(res=>res.json);
       return response;
     }
}
