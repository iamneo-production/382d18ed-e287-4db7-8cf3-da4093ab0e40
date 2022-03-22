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
    },error => console.log(error));
  }

  ngOnInit(): void {
  }

}
