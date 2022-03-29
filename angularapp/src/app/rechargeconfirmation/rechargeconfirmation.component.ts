import { Component, OnInit } from '@angular/core';
/*import {User} from '../user'
import { UserService } from '../user.service';*/
import { ActivatedRoute, Router } from '@angular/router';
import { PlanServService } from '../plan-serv.service';
import { Plan } from '../plan';
import { RechargeService } from '../recharge.service';
import { Recharge } from '../recharge';
import {FormGroup,FormControl,FormControlName,Validators, AbstractControl} from '@angular/forms'


@Component({
  selector: 'app-rechargeconfirmation',
  templateUrl: './rechargeconfirmation.component.html',
  styleUrls: ['./rechargeconfirmation.component.css']
})
export class RechargeconfirmationComponent implements OnInit {
  planId:any;
  rechargeId:number;
  plan: Plan = new Plan();
  recharge : Recharge=new Recharge();
  plans: Plan[] | undefined;
  constructor(private RechargeService:RechargeService , private planService: PlanServService, private route:ActivatedRoute,private router :Router ) { }
  //constructor(private RechargeService:RechargeService,private route:ActivatedRoute,private router :Router){}
  private getPlan() {
       this.planService.getPlans().subscribe(data => {
        this.plans = data;
        console.log(data);
      });
  }
  private rechargemodel()
  {
    this.planService.getPlanById(this.planId).subscribe(data=>{
      this.plan=data;
      this.recharge.rechargeId=data.planId;
      this.recharge.rechargePlan=data.planName;
      this.recharge.rechargePrice=data.planPrice;
      this.recharge.rechargetype=data.planType;
    },error => console.log(error));
  }

  saveRecharge(){
    console.log("save rechargeworking");
    this.rechargemodel();
    this.RechargeService.createRecharge(this.recharge).subscribe(data=>{
      console.log(data);
      
    },
    error => console.log(error)
    );
  }
  rechargeform=new FormGroup({
	  email:new FormControl(''),
	  name:new FormControl(''),
    mobile:new FormControl('')
  })

  get email(){
	  return this.rechargeform.get('email');
  }
  get name(){
	  return this.rechargeform.get('name');
  }
  get mobile(){
	  return this.rechargeform.get('mobile');
  }
  ngOnInit(): void {
    this.getPlan();
    this.planId=this.route.snapshot.params['planId'];
    this.plan=new Plan();
    this.planService.getPlanById(this.planId).subscribe(data=>{
      this.plan=data;
      this.recharge.rechargeId=data.planId;
      this.recharge.rechargePlan=data.planName;
      this.recharge.rechargePrice=data.planPrice;
      this.recharge.rechargetype=data.planType;
     // var em=document.getElementById("email");
      //this.recharge.email=document.getElementById("email");
    },error => console.log(error));
  }
  onRecharge(){
    console.log(document.getElementById("email"));
    this.saveRecharge();
   // this.router.navigate(['notifications']);
    
  }
  notifications(){
    this.router.navigate(['notifications']);
  }
  /*deteleRecharge(rechargeId:number){
    this.deteleRecharge(rechargeId).subscribe(data=>{
      console.log(data);
      this.rechargeService.deleteRecharge();
    });
  }*/
}