import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler,HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
//import { HttpRequest } from "../../../../node_modules/@types/selenium-webdriver/http";
import { Router } from "@angular/router";
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private route:Router){

    }
    intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
            if(req.headers.get('No-Auth')== "True"){
                return next.handle(req.clone());
            }
            if(localStorage.getItem('userToken')!= null){
                const cloneReq = req.clone({
                    headers:req.headers.set("Authorization","Bearer " + localStorage.getItem('userToken'))
                });
                return next.handle(cloneReq)
                            .do(succ=>{},
                                err=>{
                                    if (err.status === 401) {
                                        this.route.navigateByUrl('/login');
                                    }
                                });
            }
            else{
                this.route.navigateByUrl('/login');
            }
    }
}