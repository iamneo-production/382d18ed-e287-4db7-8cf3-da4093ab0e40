import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  updateUser: any;
  getUserbyid: any;
  getUserById(id: number) {
    throw new Error('Method not implemented.');
  }
  private baseURL = "https://8080-fadecdccafcddebfdaffdacedbbebcbf.examlyiopb.examly.io/api/v1/Users";
  constructor(private httpClient:HttpClient) { }

  public LoginUserFromRemote(user:User): Observable<any>{

    return this.httpClient.post<any>("https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/login",user);
  }

  public authentication(user:User): Observable<any>{
    return this.httpClient.get<any>("https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/userrole");

  }

  getUserList(): Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  createUser(user:User):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,user);
  }
  getUsersById(id: number) :Observable<User>
  {
    return this.httpClient.get<User> (`${this.baseURL}/${id}`);
  }
  edituser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteuser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
