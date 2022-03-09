import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addon } from './Addon';

@Injectable({
  providedIn: 'root'
})
export class PlanServService {

  private baseURL = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/addPlan";
  private baseUrl1 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/viewPlan";
  private baseUrl2 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/deletePlan";
  constructor(private httpClient: HttpClient) { }

  

  addAddon(): Observable<Addon[]>{
    return this.httpClient.add<Addon[]>(this.baseUrl1);
  }

  viewAddon(AddonId:number): Observable<Object>{
    return this.httpClient.view(`${this.baseUrl2}/${planId}`);
  }

}
