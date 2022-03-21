import { Component, OnInit } from '@angular/core';
/*import {User} from '../user'

import { UserService } from '../user.service';*/
import { ActivatedRoute, Router } from '@angular/router';
import { PlanServService } from '../plan-serv.service';
import { Plan } from '../plan';
import { RechargeService } from '../recharge.service';
import {FormGroup,FormControl,FormControlName,Validators, AbstractControl} from '@angular/forms'
import { Recharge } from '../recharge';


@Component({
  selector: 'app-rechargeconfirmation',
  templateUrl: './rechargeconfirmation.component.html',
  styleUrls: ['./rechargeconfirmation.component.css']
})
export class RechargeconfirmationComponent implements OnInit {

  planId:any;
  rechargeId:number;
  plan: Plan = new Plan();
  plans: Plan[] | undefined;
  recharge : Recharge=new Recharge();
  constructor(private planService: PlanServService,private rechargeservice:RechargeService, private route:ActivatedRoute,private router :Router ) { }
  //constructor(private RechargeService:RechargeService,private route:ActivatedRoute,private router :Router){}
  private getPlan() {
       this.planService.getPlans().subscribe(data => {
        this.plans = data;
        console.log(data);
      });
  }
  rechargeform=new FormGroup({
	  emailId:new FormControl(''),
	  name:new FormControl(''),
    mobilenumber:new FormControl('')

  })
  get emailId(){
	  return this.rechargeform.get('emailId');
  }
  get username(){
	  return this.rechargeform.get('username');
  }
  get mobilenumber(){
	  return this.rechargeform.get('mobilenumber');
  }
  ngOnInit(): void {
    this.getPlan();
    this.planId=this.route.snapshot.params['planId'];
    this.plan=new Plan();
    this.planService.getPlanById(this.planId).subscribe(data=>{
      this.plan=data;
    },error => console.log(error));
  }
  onRecharge(){
    this.rechargeservice.createRecharge(this.recharge).subscribe(data =>{
      //this.recharge.email=this.rechargeform;
      console.log(data);
    },
    error => console.log(error));
    
  }
  /*deteleRecharge(rechargeId:number){
    this.deteleRecharge(rechargeId).subscribe(data=>{
      console.log(data);
      this.rechargeService.deleteRecharge();
    });
  }*/
}

