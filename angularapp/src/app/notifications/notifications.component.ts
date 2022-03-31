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
  num:any;
  recharge : Recharge=new Recharge();
  recharges: Recharge[] | undefined;
  constructor(private RechargeService:RechargeService , private rechargeService: RechargeService, private route:ActivatedRoute,private router :Router ) { }
  
  private rechargemodel()
  {
    this.num = this.route.snapshot.params['num'];
    console.log("number");
   console.log(this.num);
  }

  ngOnInit(): void {
    this.rechargemodel();
    
  }

}
