import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router,private httpClient:HttpClient) {}


 apiurl="https://8080-faecbadeddebfdaffdacedbbebcbf.examlyiopb.examly.io"
  

  public LoginUserFromRemote(user:User): Observable<any>{
    return this.httpClient.post<any>("https://8080-faecbadeddebfdaffdacedbbebcbf.examlyiopb.examly.io/login",user);
  }
  loginUser(token){
    localStorage.setItem("token",token);
    return true;
  }
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token===undefined || token==='' || token==null)
    {
      return false;
    }
    else {
      return true;
    }
  
  }

  getToken(): string | null {
    return localStorage.getItem('token') || '';
  }

  HaveAccess(role: "admin", menu: any) {
    return this.httpClient.get(this.apiurl + 'HaveAccess?role=' + role + '&menu=' + menu);
  }
  

 /* setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }*/

  logout() {
   // localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['login']);
  }


  

  generateToken(user:any){
    return this.httpClient.post<any>("https://8080-faecbadeddebfdaffdacedbbebcbf.examlyiopb.examly.io/token",user);


  }

  }