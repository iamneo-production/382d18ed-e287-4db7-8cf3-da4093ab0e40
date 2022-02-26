import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { UserService } from '../user.service';
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  user: User[];

  constructor(private userservice :UserService) { }

  ngOnInit(): void {
      this.getuser();
  }
  private getuser(){
    this.userservice.getUserList().subscribe(data =>{
      this.user=data;
    })

  }

}
