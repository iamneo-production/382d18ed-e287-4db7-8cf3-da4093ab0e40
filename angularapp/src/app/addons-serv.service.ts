import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { addons } from './addons';

@Injectable({
  providedIn: 'root'
})
export class addonsServService {

  private baseURL = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/addAddon";
  private baseUrl1 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/viewAddon";
  
  constructor(private httpClient: HttpClient) { }

  

  addAddon(): Observable<addons[]>{
    return this.httpClient.add<addons[]>(this.baseURL);
  }

  viewAddon(AddonId:number): Observable<Object>{
    return this.httpClient.view(`${this.baseUrl1}/${AddonId}`);
  }

}
