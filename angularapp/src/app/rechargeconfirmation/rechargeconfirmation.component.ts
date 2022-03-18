import { Component, OnInit } from '@angular/core';
/*import {User} from '../user'
import { UserService } from '../user.service';*/
import { ActivatedRoute, Router } from '@angular/router';
import { PlanServService } from '../plan-serv.service';
import { Plan } from '../plan';
import { RechargeService } from '../recharge.service';


@Component({
  selector: 'app-rechargeconfirmation',
  templateUrl: './rechargeconfirmation.component.html',
  styleUrls: ['./rechargeconfirmation.component.css']
})
export class RechargeconfirmationComponent implements OnInit {
  planId:any;
  rechargeId:number;
  recharge: Plan = new Plan();
  plans: Plan[] | undefined;
  constructor(private planService: PlanServService, private route:ActivatedRoute,private router :Router ) { }
  //constructor(private RechargeService:RechargeService,private route:ActivatedRoute,private router :Router){}
  private getPlan() {
       this.planService.getPlans().subscribe(data => {
        this.plans = data;
        console.log(data);
      });
  }
  
  ngOnInit(): void {
    this.getPlan();
    this.planId=this.route.snapshot.params['planId'];
    this.recharge=new Plan();
    this.planService.getPlanById(this.planId).subscribe(data=>{
      this.recharge=data;
    },error => console.log(error));
  }
  onRecharge(){
    
  }
  /*deteleRecharge(rechargeId:number){
    this.deteleRecharge(rechargeId).subscribe(data=>{
      console.log(data);
      this.rechargeService.deleteRecharge();
    });
  }*/
}
