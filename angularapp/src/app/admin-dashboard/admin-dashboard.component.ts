import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserService) { }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
