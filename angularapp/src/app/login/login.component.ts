import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(/*private _service : AuthService*/ private _router :Router,private _service1:UserService,private route:ActivatedRoute) { }
 msg='';
  
  // getting the form control elements
  get password1(): AbstractControl {
    return this.loginform.controls['password'];
  }
 
  loginform=new FormGroup({
	  emailId:new FormControl('',[Validators.required,Validators.email]),
	 password:new FormControl('',[Validators.required,]),
   
  })

  get emailId(){
	  return this.loginform.get('emailId');
  }
 
  get password(){
	  return this.loginform.get('password');
  }
  
  

  login(){
	  //console.log(this.loginform.value);
    this.loginUser();
  }


  ngOnInit(): void {
  }

 /* if(user_role === 'admin'){
    route.navigate(['/popularplans']);

    
  };*/
  user=new User();
  user1=new User();
 
getdata()
{
  
  this.user.emailId=this.route.snapshot.params['emailId'];
  this._service1.getUserbyemailId(this.user.emailId).subscribe(data=>{
    this.user.user_role=data.user_role;
    
  })
  
}
  loginUser(){
    //this._service.generateToken(this.user).subscribe(
      this.getdata();
      this._service1.LoginUserFromRemote(this.user1=this.user).subscribe(
      data =>{
        console.log("response received");
        console.log(this.user);
        if(this.user.user_role==="admin"){
          this._router.navigate(['/admin/dashboard'])
          
        }

        else{
          this._router.navigate(['/popularplans'])
        }
      

        },
      error =>{
        console.log("exception occured");
        this.msg="Bad Credentials, please enter valid emailId and password";
      }
      )

  }
  onSubmit(){
	  console.log(this.user);
    this.loginUser();
  }

}
