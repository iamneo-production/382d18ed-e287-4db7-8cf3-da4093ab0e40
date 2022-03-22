import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router,private httpClient:HttpClient) {}
  

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
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  generateToken(user:any){
    return this.httpClient.post<any>("https://8080-faecbadeddebfdaffdacedbbebcbf.examlyiopb.examly.io/token",user);


  }

  }