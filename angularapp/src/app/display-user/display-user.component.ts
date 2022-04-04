import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  user: User[];

  constructor(private userservice :UserService,private router:Router) { }

  ngOnInit(): void {
      this.getuser();
  }
  private getuser(){
    this.userservice.getUserList().subscribe(data =>{
      this.user=data;
    })

  }

  edituser(id : number)
  {
    this.router.navigate(['edituser',id]);
  }

  deleteuser(id : number)
  {
    this.userservice.deleteuser(id).subscribe(data =>{
      console.log(data);
      this.getuser();

    })
    
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
