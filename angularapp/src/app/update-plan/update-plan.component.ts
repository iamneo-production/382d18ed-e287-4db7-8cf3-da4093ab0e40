import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../plan';
import { PlanServService } from '../plan-serv.service';

@Component({
  selector: 'app-update-plan',
  templateUrl: './update-plan.component.html',
  styleUrls: ['./update-plan.component.css']
})
export class UpdatePlanComponent implements OnInit {

  planId: any;
  plan: Plan = new Plan();

  constructor(private planService: PlanServService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.planId = this.route.snapshot.params['planId'];
    this.planService.getPlanById(this.planId).subscribe(data => {
      console.log(data);
      this.plan = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.planService.updatePlan(this.planId, this.plan).subscribe( data =>{
      this.goToPlanList();
    }
    , error => console.log(error));
  }

  goToPlanList(){
    this.router.navigate(['/admin/prepaidplans']);
  }

}
