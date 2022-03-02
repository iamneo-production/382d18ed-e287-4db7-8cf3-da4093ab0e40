import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../plan';
import { PlanServService } from '../plan-serv.service';

@Component({
  selector: 'app-prepaidplans',
  templateUrl: './prepaidplans.component.html',
  styleUrls: ['./prepaidplans.component.css']
})
export class PrepaidplansComponent implements OnInit {

  x:any;
  plan: Plan = new Plan();
  plans: Plan[] | undefined;
  constructor(private planService: PlanServService, 
    private router: Router) { }

  addplan() {
    this.x = document.getElementById("plan_inputt");
    if (this.x.style.display === "none") {
        this.x.style.display = "block";
    } else {
        this.x.style.display = "none";
    }
}

private getPlan() {
  this.planService.getPlans().subscribe(data => {
    this.plans = data;
    console.log(data);
  });
}

savePlan(){
  this.planService.createPlan(this.plan).subscribe(data=>{
    this.getPlan();
  },
  error => console.log(error)
  );
}

onSubmit(){
  this.savePlan();
}

logout(){
  sessionStorage.clear();
  this.router.navigate(['user/login']);
}


  ngOnInit(): void {
  }

}
