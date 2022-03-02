import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "https://8080-ffeeacaeffaecddebfdaffdacedbbebcbf.examlyiopb.examly.io/api/v1/Users";

  constructor(private httpClient:HttpClient) { }
  getUserList(): Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  createUser(user:User):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,user);
  }
}
