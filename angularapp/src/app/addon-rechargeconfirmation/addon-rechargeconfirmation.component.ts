import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonService } from '../addon.service';
import { Addon } from '../addon';
import { RechargeService } from '../recharge.service';
import { Recharge } from '../recharge';
import {FormGroup,FormControl,FormControlName,Validators, AbstractControl} from '@angular/forms'


@Component({
  selector: 'app-addon-rechargeconfirmation',
  templateUrl: './addon-rechargeconfirmation.component.html',
  styleUrls: ['./addon-rechargeconfirmation.component.css']
})
export class AddonRechargeconfirmationComponent implements OnInit {
  addonId:any;
  rechargeId:number;
  addon: Addon = new Addon();
  recharge : Recharge=new Recharge();
  addons: Addon[] | undefined;
  constructor(private RechargeService:RechargeService , private addonService: AddonService, private route:ActivatedRoute,private router :Router) { }
  private getAddon() {
    this.addonService.getAddons().subscribe(data => {
     this.addons = data;
     console.log(data);
   });
}
  private rechargemodel()
  {
    this.addonService.getAddonById(this.addonId).subscribe(data=>{
      this.addon=data;
      this.recharge.rechargeId=data.addonId;
      this.recharge.rechargePlan=data.addonName;
      this.recharge.rechargePrice=data.addonPrice;
      this.recharge.rechargetype=data.addonDetails;
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
    this.getAddon();
    this.addonId=this.route.snapshot.params['addonId'];
    this.addon=new Addon();
    this.addonService.getAddonById(this.addonId).subscribe(data=>{
      this.addon=data;
      this.recharge.rechargeId=data.addonId;
      this.recharge.rechargePlan=data.addonName;
      this.recharge.rechargePrice=data.addonPrice;
      this.recharge.rechargetype=data.addonDetails;
      var em=document.getElementById("email");
      //this.recharge.email=document.getElementById("email");
    },error => console.log(error));
  }
  onRecharge(){
    console.log(document.getElementById("email"));
    this.saveRecharge();
    this.router.navigate(['notifications']);
    
  }
}
