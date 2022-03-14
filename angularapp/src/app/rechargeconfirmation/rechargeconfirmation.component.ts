import { Component, OnInit } from '@angular/core';
/*import {User} from '../user'
import { UserService } from '../user.service';*/
import { Router } from '@angular/router';
import { PlanServService } from '../plan-serv.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-rechargeconfirmation',
  templateUrl: './rechargeconfirmation.component.html',
  styleUrls: ['./rechargeconfirmation.component.css']
})
export class RechargeconfirmationComponent implements OnInit {
  x:any;
  plan: Plan = new Plan();
  plans: Plan[] | undefined;
  constructor(private planService: PlanServService, private router: Router) { }
  private getPlan() {
       this.planService.getPlans().subscribe(data => {
        this.plans = data;
        console.log(data);
      });
  }
  ngOnInit(): void {
    this.getPlan();
  }

}
