import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpResponseData} from '../../interface/http-response-data';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  registerAPI(registerData:{name:string,email:string,password:string,birthday:Date}):Observable<any> {
    return this.http.post<HttpResponseData>(`${environment.api_url}/users/register`, registerData);
  }

  loginAPI(loginData:{email:string,password:string}):Observable<any> {
    console.log(loginData)
    return this.http.post<HttpResponseData>(`${environment.api_url}/users/login`, loginData);
  }

  profileAPI(userId:number):Observable<any>{
    return this.http.get(`${environment.api_url}/users/profile?userId=${userId}`);
  }

}
