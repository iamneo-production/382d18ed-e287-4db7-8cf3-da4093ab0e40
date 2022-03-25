import { Component, OnInit } from '@angular/core';

import { Recharge } from '../recharge';
import { RechargeService } from '../recharge.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editrecharge',
  templateUrl: './editrecharge.component.html',
  styleUrls: ['./editrecharge.component.css']
})
export class EditrechargeComponent implements OnInit {

  id: any;
  recharge: Recharge = new Recharge();

  constructor(private rechargeService: RechargeService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rechargeService.getRechargeById(this.id).subscribe(data => {
      console.log(data);
      this.recharge = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.rechargeService.editRecharge(this.id, this.recharge).subscribe( data =>{
      this.goTorechargeList();
    }
    , error => console.log(error));
  }

  goTorechargeList(){
    this.router.navigate(['displayrecharge']);
  }

}
