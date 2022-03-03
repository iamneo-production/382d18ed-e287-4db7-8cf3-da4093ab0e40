import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanServService {

  private baseURL = "https://8081-ffeeacaeffaecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/addPlan";
  private baseUrl1 = "https://8080-ffeeacaeffaecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/viewPlan";
  constructor(private httpClient: HttpClient) { }

  createPlan(plan: Plan): Observable<Object>{
    return this.httpClient.post(this.baseURL, plan);
  }

  getPlans(): Observable<Plan[]>{
    return this.httpClient.get<Plan[]>(this.baseUrl1);
  }

}
