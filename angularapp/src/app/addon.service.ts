import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addon } from './addon';


@Injectable({
  providedIn: 'root'
})
export class AddonService {

  private baseURL = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/addAddon";
  private baseUrl1 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/viewAddon";
  
  constructor(private httpClient: HttpClient) { }

  addAddon(id: number, addon: Addon): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, addon);
  }

  viewPlan(AddonId:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl1}/${AddonId}`);
  }

}

