import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { ActivatedRoute, Router } from '@angular/router';

import { PlanServService } from '../plan-serv.service';
@Component({
  selector: 'app-rechargeconfirmation',
  templateUrl: './rechargeconfirmation.component.html',
  styleUrls: ['./rechargeconfirmation.component.css']
})
export class RechargeconfirmationComponent implements OnInit {

  constructor(private planService: PlanServService, 
    private route: ActivatedRoute,
    private router: Router) { }
  planId: any;
  plan: Plan = new Plan();
  ngOnInit(): void {
    this.planId = this.route.snapshot.params['planId'];

    this.plan = new Plan();
    this.planService.getPlanById(this.planId).subscribe( data => {
      this.plan = data;
    });
  }

}
