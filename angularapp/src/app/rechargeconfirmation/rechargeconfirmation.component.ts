import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RechargeService } from '../recharge.service';
import { Recharge } from '../recharge';

@Component({
  selector: 'app-rechargeconfirmation',
  templateUrl: './rechargeconfirmation.component.html',
  styleUrls: ['./rechargeconfirmation.component.css']
})
export class RechargeconfirmationComponent implements OnInit {
  x:any;
  recharge: Recharge = new Recharge();
  recharges: Recharge[] | undefined;
  constructor(private rechargeService: RechargeService, private router: Router) { }
  private getrecharge() {
       this.rechargeService.getRecharges().subscribe(data => {
        this.recharges = data;
        console.log(data);
      });
  }
  ngOnInit(): void {
    this.getrecharge();
  }

}
