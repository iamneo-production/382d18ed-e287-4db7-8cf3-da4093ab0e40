import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addon } from './addon';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  private baseURL = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/addPlan";
  private baseUrl1 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/viewPlan";
  private baseUrl2 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/deletePlan";
  private baseUrl3 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/updatePlan";
  constructor(private httpClient: HttpClient) { }

  createAddon(addon: Addon): Observable<Object>{
    return this.httpClient.post(this.baseURL, addon);
  }

  getAddon(): Observable<Addon[]>{
    return this.httpClient.get<Addon[]>(this.baseUrl1);
  }

  getAddonById(id: number): Observable<Addon>{
    return this.httpClient.get<Addon>(`${this.baseUrl1}/${id}`);
  }

  updateAddon(id: number, addon: Addon): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl3}/${id}`, addon);
  }

  deleteAddon(AddonId:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl2}/${AddonId}`);
  }

}