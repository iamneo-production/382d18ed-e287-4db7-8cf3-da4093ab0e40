import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RechargeService } from '../recharge.service';
import { Recharge } from '../recharge';
import {FormGroup,FormControl,FormControlName,Validators, AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  rechargeId:number;
  recharge : Recharge=new Recharge();
  recharges: Recharge[] | undefined;
  constructor(private RechargeService:RechargeService , private rechargeService: RechargeService, private route:ActivatedRoute,private router :Router ) { }
  
  private getRecharge() {
       this.rechargeService.getRecharges().subscribe(data => {
        this.recharges = data;
        console.log(data);
      });
  }
  private rechargemodel()
  {
    this.rechargeService.getRechargeById(this.rechargeId).subscribe(data=>{
      this.recharge=data;
      this.recharge.name=data.name;
      this.recharge.mobile=data.mobile;
      this.recharge.rechargePrice=data.rechargePrice;
    },error => console.log(error));
  }

  ngOnInit(): void {
    this.getRecharge();
    this.rechargeId=this.route.snapshot.params['planId'];
    this.recharge=new Recharge();
    this.rechargeService.getRechargeById(this.rechargeId).subscribe(data=>{
      this.recharge=data;
      this.recharge.rechargeId=data.rechargeId;
      this.recharge.rechargePlan=data.rechargePlan;
      this.recharge.rechargePrice=data.rechargePrice;
      this.recharge.rechargetype=data.rechargetype;
      //var em=document.getElementById("email");
      //this.recharge.email=document.getElementById("email");
    },error => console.log(error));
  }

}
