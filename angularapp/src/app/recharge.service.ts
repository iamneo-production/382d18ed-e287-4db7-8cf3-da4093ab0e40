import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recharge } from './recharge';
@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private baseURL = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/addRecharge";
  private baseUrl1 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/viewRecharge";
  private baseUrl2 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/deleteRecharge";
  private baseUrl3 = "https://8080-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io/admin/editRecharge";
  constructor(private httpClient: HttpClient) { }
  createRecharge(Recharge: Recharge): Observable<Object>{
    return this.httpClient.post(this.baseURL, Recharge);
  }

  getRecharges(): Observable<Recharge[]>{
    return this.httpClient.get<Recharge[]>(this.baseUrl1);
  }

  getRechargeById(id: number): Observable<Recharge>{
    return this.httpClient.get<Recharge>(`${this.baseUrl1}/${id}`);
  }

  editRecharge(id: number, Recharge: Recharge): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl3}/${id}`, Recharge);
  }

  deleteRecharge(RechargeId:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl2}/${RechargeId}`);
  }
}
