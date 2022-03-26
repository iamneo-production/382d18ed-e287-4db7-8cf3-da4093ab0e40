import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addon } from './addon';

@Injectable({
  providedIn: 'root'
})
export class AddonService {


  private baseURL = "https://8080-fadecdccafcddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/addAddon";
  private baseUrl1 = "https://8080-fadecdccafcddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/viewAddon";
  private baseUrl2 = "https://8080-fadecdccafcddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/deleteAddon";
  private baseUrl3 = "https://8080-fadecdccafcddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/updateAddon";

  constructor(private httpClient: HttpClient) { }

  createAddon(addon: Addon): Observable<Object>{
    return this.httpClient.post(this.baseURL, addon);
  }


  getAddons(): Observable<Addon[]>{

    return this.httpClient.get<Addon[]>(this.baseUrl1);
  }

  getAddonById(id: number): Observable<Addon>{
    return this.httpClient.get<Addon>(`${this.baseUrl1}/${id}`);
  }

  updateAddon(id: number, addon: Addon): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl3}/${id}`, Addon);
  }

  deleteAddon(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl2}/${id}`);
  }

}